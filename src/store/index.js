import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import history from './history'

Vue.use(Vuex)
axios.defaults.headers.common.Authorization = `Bearer ${localStorage.getItem('token')}`

export const store = new Vuex.Store({
  state: {
    products: [],
    user: {},
    items: [],
    token: localStorage.getItem('token') || null,
    roleId: localStorage.getItem('roleId') || null,
    allUser: [],
    pagination: {}
  },
  mutations: {
    // productsM (state, payload) {
    //   state.products = payload
    // },
    SET_PRODUCTS (state, payload) {
      state.products = payload
    },
    // userM (state, payload) {
    //   state.user = payload
    //   state.token = payload.token
    // },
    LOGIN_USER (state, payload) {
      state.user = payload
      state.token = payload.token
      state.roleId = payload.roleId
    },
    logoutM (state) {
      state.token = null
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
    ALL_USER (state, payload) {
      state.allUser = payload
    },
    SET_PAGINATION (state, payload) {
      state.pagination = payload
    }
  },
  actions: {
    feature (context, payload) {
      return new Promise((resolve, reject) => {
        // axios.get(`http://localhost:3000/api/v1/product${payload}`)
        axios.get(`${process.env.VUE_APP_BASE_URL}/api/v1/product${payload}`)
          .then(res => {
            resolve(res.data.result)
            context.commit('SET_PRODUCTS', res.data.result)
            context.commit('SET_PAGINATION', res.data.pagination)
          })
          .catch(err => console.log(err))
      })
    },
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
    // getProducts (setex) {
    //   axios.get('http://localhost:3000/api/v1/product/?page=1&limit=30')
    //     .then(res => {
    //       console.log(res.data.result)
    //       setex.commit('productsM', res.data.result.products)
    //     })
    // },
    getProducts (context, payload) {
      return new Promise((resolve, reject) => {
        axios.get(`${process.env.VUE_APP_BASE_URL}/api/v1/product${payload || ''}`)
        // axios.get('http://localhost:3000/api/v1/product?limit=50')
          .then(res => {
            console.log(res.data.result)
            console.log(res.data)
            context.commit('SET_PRODUCTS', res.data.result)
            context.commit('SET_PAGINATION', res.data.pagination)
          })
          .catch(err => console.log(err))
      })
    },
    insertProduct (context, payload) {
      return new Promise((resolve, reject) => {
        // axios.post('http://localhost:3000/api/v1/product', payload)
        axios.post(`${process.env.VUE_APP_BASE_URL}/api/v1/product`, payload)
          .then(res => {
            console.log(res.data.result)
            // resolve(res.data.result.products)
            resolve(res.data.result)
          })
          .catch(err => reject(err))
      })
    },
    updateProduct (context, payload) {
      return new Promise((resolve, reject) => {
        // axios.patch('http://localhost:3000/api/v1/product/' + payload.id, payload.data)
        axios.patch(`${process.env.VUE_APP_BASE_URL}/api/v1/product/` + payload.id, payload.data)
          .then(res => {
            console.log(res.data.result)
            // resolve(res.data.result.products)
            resolve(res.data.result)
          })
          .catch(err => reject(err))
      })
    },
    deleteProduct (context, payload) {
      return new Promise((resolve, reject) => {
        // axios.delete('http://localhost:3000/api/v1/product/' + payload)
        axios.delete(`${process.env.VUE_APP_BASE_URL}/api/v1/product/` + payload)
          .then(res => {
            console.log(res.data.result)
            resolve(res.data.result)
          })
          .catch(err => reject(err))
      })
    },
    login (setex, payload) {
      console.log(payload)
      return new Promise((resolve, reject) => {
        // axios.post('http://localhost:3000/api/v1/user/login', payload)
        axios.post(`${process.env.VUE_APP_BASE_URL}/api/v1/user/login`, payload)
          .then(res => {
            setex.commit('LOGIN_USER', res.data.result)
            localStorage.setItem('token', res.data.result.token)
            localStorage.setItem('roleId', res.data.result.roleId)
            axios.defaults.headers.common.Authorization = `Bearer ${localStorage.getItem('token')}`
            resolve(res.data.result)
          })
          .catch(err => {
            console.log(err)
            if (err.response.status === 401) {
              alert('incorrect email or password')
            }
            if (err.response.status === 404) {
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
        // axios.post('http://localhost:3000/api/v1/user/register', payload)
        axios.post(`${process.env.VUE_APP_BASE_URL}/api/v1/user/register`, payload)
          .then(res => {
            resolve(res.data)
          })
          .catch(err => {
            console.log(err.response)
            if (err.response.status === 409) {
              alert('email already registered')
            }
          })
      })
    },
    clearCart (context) {
      context.commit('clearCart')
    },
    getAllUser (context) {
      // axios.get('http://localhost:3000/api/v1/user/')
      axios.get(`${process.env.VUE_APP_BASE_URL}/api/v1/user/`)
        .then(res => {
          console.log(res.data)
          context.commit('ALL_USER', res.data.result)
        })
        .catch(err => {
          console.log(err)
          if (err.response.status === 403) {
            alert('Only admin')
          }
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
    allUser (state) {
      return state.allUser
    },
    get_page (state) {
      return state.pagination
    }
  },
  modules: {
    history
  }
})
