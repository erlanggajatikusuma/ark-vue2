import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    products: [],
    user: {},
    token: localStorage.getItem('token') || null
  },
  mutations: {
    productsM (state, payload) {
      state.products = payload
    },
    userM (state, payload) {
      state.user = payload
      state.token = payload.token
    }
  },
  actions: {
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
            console.log(res)
            setex.commit('userM', res.data.result)
            localStorage.setItem('token', res.data.result[0].token)
            resolve(res.data.result[0])
          })
          .catch(err => {
            console.log(err)
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
    }
  },
  modules: {
  }
})
