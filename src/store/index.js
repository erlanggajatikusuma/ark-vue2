import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)
axios.defaults.headers.common.Authorization = `Bearer ${localStorage.getItem('token')}`

export const store = new Vuex.Store({
  state: {
    products: [],
    user: {},
    items: [],
    token: localStorage.getItem('token') || null
  },
  mutations: {
    productsM (state, payload) {
      state.products = payload
    },
    userM (state, payload) {
      state.user = payload
      state.token = payload.token
    },
    logoutM (state) {
      state.token = null
    },
    itemsM (state, payload) {
      const data = payload
      const found = state.items.find(item => item.id === payload.id)
      if (found) {
        const carItem = state.items
        const id = found.id
        console.log(id)
        const index = state.items.map(item => {
          return item.id
        }).indexOf(id)
        carItem.splice(index, 1)
      } else {
        state.items.push(data)
      }
    }
  },
  actions: {
    interceptorsRequest (setex) {
      console.log('interse')
      axios.interceptors.request.use(function (config) {
        // Do something before request is sent
        config.headers.Authorization = `Bearer ${setex.state.token}`
        console.log(config)
        return config
      }, function (error) {
        // Do something with request error
        return Promise.reject(error)
      })
    },
    interceptorsResponse () {
      axios.interceptors.response.use(function (response) {
        // Any status code that lie within the range of 2xx cause this function to trigger
        // Do something with response data
        return response
      }, function (error) {
        // Any status codes that falls outside the range of 2xx cause this function to trigger
        // Do something with response error
        console.log(error)
        return Promise.reject(error)
      })
    },
    getProducts (setex) {
      axios.get('http://localhost:3000/api/v1/product/?page=1&limit=30')
        .then(res => {
          console.log(res.data.result.products)
          setex.commit('productsM', res.data.result.products)
        })
    },
    login (setex, payload) {
      console.log(payload)
      return new Promise((resolve, reject) => {
        axios.post('http://localhost:3000/api/v1/user/login', payload)
          .then(res => {
            setex.commit('userM', res.data.result)
            localStorage.setItem('token', res.data.result.token)
            axios.defaults.headers.common.Authorization = `Bearer ${localStorage.getItem('token')}`
            resolve(res.data.result)
          })
          .catch(err => {
            console.log(err.response)
            if (err.response.status === 401) {
              alert('incorrect email or password')
            }
          })
      })
    },
    logout (setex) {
      setex.commit('logoutM')
      localStorage.removeItem('token')
    },
    register (setex, payload) {
      console.log(payload)
      return new Promise((resolve, reject) => {
        axios.post('http://localhost:3000/api/v1/user/register', payload)
          .then(res => {
            console.log(res.data)
            console.log(res)
            resolve(res.data)
          })
          .catch(err => {
            console.log(err.response)
            if (err.response.status === 409) {
              alert('email already registered')
            }
          })
      })
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
      return state.items
    }
  },
  modules: {
  }
})
