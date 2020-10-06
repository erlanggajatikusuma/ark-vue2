import axios from 'axios'

const state = {
  allUser: []
}

const mutations = {
  ALL_USER (state, payload) {
    state.allUser = payload
  }
}

const getters = {
  allUser (state) {
    return state.allUser
  }
}

const actions = {
  getAllUser (context) {
    axios.get(`${process.env.VUE_APP_BASE_URL}/api/v1/user/`)
      .then(res => {
        console.log(res.data)
        context.commit('ALL_USER', res.data.result)
      })
      .catch(err => {
        console.log(err)
      })
  },
  updateUser (context, payload) {
    return new Promise((resolve, reject) => {
      axios.patch(`${process.env.VUE_APP_BASE_URL}/api/v1/user/${payload.id}`, payload.data)
        .then(res => {
          resolve(res.data)
        })
    })
  },
  deleteUser (context, payload) {
    return new Promise((resolve, reject) => {
      axios.delete(`${process.env.VUE_APP_BASE_URL}/api/v1/user/${payload}`)
        .then(res => {
          console.log(res.data)
          resolve(res.data)
        })
    })
  }
}

export default {
  state,
  mutations,
  actions,
  getters
}
