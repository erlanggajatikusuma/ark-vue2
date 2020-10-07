import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import history from './history'
import users from './users'
import router from '../router/index'
import Swal from 'sweetalert2/dist/sweetalert2.js'

import 'sweetalert2/src/sweetalert2.scss'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    products: [],
    user: {},
    items: [],
    token: localStorage.getItem('token') || null,
    roleId: localStorage.getItem('roleId') || null,
    pagination: {},
    invoice: '',
    cashier: ''
  },
  mutations: {
    SET_PRODUCTS (state, payload) {
      state.products = payload
    },
    LOGIN_USER (state, payload) {
      state.user = payload
      state.token = payload.token
      state.roleId = payload.roleId
    },
    DELETE_USER (state) {
      state.token = null
      state.user = {}
    },
    itemsM (state, payload) {
      const data = payload
      const found = state.items.find(item => item.id === payload.id)
      if (found) {
        const cartItem = state.items
        const id = found.id
        const index = state.items.map(item => {
          return item.id
        }).indexOf(id)
        cartItem.splice(index, 1)
      } else {
        state.items.push(data)
      }
    },
    clearCart (state) {
      state.items = []
    },
    SET_PAGINATION (state, payload) {
      state.pagination = payload
    },
    GENERATE_INVOICE (state) {
      const d = new Date()
      const day = d.getDate().toString()
      const month = (d.getMonth() + 1).toString()
      const year = d.getFullYear().toString().split('').splice(2, 3).join('')
      const rnd = Math.random(0, 100).toString().substr(14).toString()
      const invoice = day + month + year + rnd
      state.invoice = invoice
    },
    CASHIER (state) {
      const name = () => {
        const cashiers = ['Andi', 'Maya', 'Agus', 'Sinta', 'Bagas', 'Putri']
        const randomize = []
        for (let i = 0; i < 1; i++) {
          randomize.push(cashiers.splice(Math.floor(Math.random() * cashiers.length), 1))
        }
        return randomize.toString()
      }
      state.cashier = name()
    }
  },
  actions: {
    feature (context, payload) {
      return new Promise((resolve, reject) => {
        axios.get(`${process.env.VUE_APP_BASE_URL}/api/v1/product${payload}`)
          .then(res => {
            resolve(res.data.result)
            context.commit('SET_PRODUCTS', res.data.result)
            context.commit('SET_PAGINATION', res.data.pagination)
          })
          .catch(err => console.log(err))
      })
    },
    interceptorRequest (context) {
      axios.interceptors.request.use(function (config) {
        // Do something before request is sent
        config.headers.Authorization = `Bearer ${context.state.token}`
        return config
      }, function (error) {
        // Do something with request error
        return Promise.reject(error)
      })
    },
    interceptorResponse (context) {
      axios.interceptors.response.use(function (response) {
        // Any status code that lie within the range of 2xx cause this function to trigger
        // Do something with response data
        return response
      }, function (error) {
        // Any status codes that falls outside the range of 2xx cause this function to trigger
        // Do something with response error
        if (error.response.status === 401) {
          if (error.response.data.result.message === 'token expired') {
            localStorage.removeItem('token')
            localStorage.removeItem('roleId')
            context.commit('DELETE_USER')
            router.push('/login')
            Swal.fire({
              icon: 'error',
              title: 'Oops...',
              text: 'Maaf token session anda telah habis !'
            })
          }
          if (error.response.data.result.message === 'token invalid') {
            localStorage.removeItem('token')
            localStorage.removeItem('roleId')
            context.commit('DELETE_USER')
            router.push('/login')
            Swal.fire({
              icon: 'error',
              title: 'Oops...',
              text: 'Maaf token anda salah silahkan login kembali !'
            })
          }
        }
        return Promise.reject(error)
      })
    },
    getProducts (context, payload) {
      return new Promise((resolve, reject) => {
        axios.get(`${process.env.VUE_APP_BASE_URL}/api/v1/product${payload || ''}`)
          .then(res => {
            context.commit('SET_PRODUCTS', res.data.result)
            context.commit('SET_PAGINATION', res.data.pagination)
            resolve(res.data.result)
          })
          .catch(err => console.log(err))
      })
    },
    insertProduct (context, payload) {
      return new Promise((resolve, reject) => {
        axios.post(`${process.env.VUE_APP_BASE_URL}/api/v1/product`, payload)
          .then(res => {
            resolve(res.data.result)
          })
          .catch(err => reject(err))
      })
    },
    updateProduct (context, payload) {
      return new Promise((resolve, reject) => {
        axios.patch(`${process.env.VUE_APP_BASE_URL}/api/v1/product/` + payload.id, payload.data)
          .then(res => {
            resolve(res.data.result)
          })
          .catch(err => reject(err))
      })
    },
    deleteProduct (context, payload) {
      return new Promise((resolve, reject) => {
        axios.delete(`${process.env.VUE_APP_BASE_URL}/api/v1/product/` + payload)
          .then(res => {
            resolve(res.data.result)
          })
          .catch(err => reject(err))
      })
    },
    login (context, payload) {
      return new Promise((resolve, reject) => {
        axios.post(`${process.env.VUE_APP_BASE_URL}/api/v1/user/login`, payload)
          .then(res => {
            context.commit('LOGIN_USER', res.data.result)
            localStorage.setItem('token', res.data.result.token)
            localStorage.setItem('roleId', res.data.result.roleId)
            axios.defaults.headers.common.Authorization = `Bearer ${localStorage.getItem('token')}`
            resolve(res.data.result)
          })
          .catch(err => {
            reject(err)
          })
      })
    },
    logout (context) {
      context.commit('DELETE_USER')
      localStorage.removeItem('token')
      localStorage.removeItem('roleId')
    },
    register (context, payload) {
      return new Promise((resolve, reject) => {
        axios.post(`${process.env.VUE_APP_BASE_URL}/api/v1/user/register`, payload)
          .then(res => {
            resolve(res.data)
          })
          .catch(err => {
            reject(err)
          })
      })
    },
    clearCart (context) {
      context.commit('clearCart')
    }
  },
  getters: {
    productsG (state) {
      return state.products
    },
    isLogin (state) {
      console.log(state)
      return state.token !== null
    },
    itemsG (state) {
      return state.items
    },
    quantity (state) {
      return state.items.length
    },
    price (state) {
      let total = 0
      state.items.forEach(item => {
        total += item.price * item.qty
      })
      return total
    },
    ppn (state) {
      let ppn = 0
      state.items.forEach(item => {
        ppn += (item.price * item.qty) * (10 / 100)
      })
      return ppn
    },
    get_page (state) {
      return state.pagination
    },
    get_invoice (state) {
      return state.invoice
    },
    get_cashier (state) {
      return state.cashier
    },
    get_roleId (state) {
      return parseInt(state.roleId)
    }
  },
  modules: {
    history,
    users
  }
})
