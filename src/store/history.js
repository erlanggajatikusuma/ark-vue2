import axios from 'axios'

const state = {
  histories: []
}

const mutations = {
  SET_HISTORIES (state, payload) {
    state.histories = payload
  }
}

const actions = {
  getHistories (context) {
    return new Promise((resolve, reject) => {
    //   axios.get(`${process.env.VUE_APP_BASE_URL}api/v1/history`)
      axios.get('http://localhost:3000/api/v1/history')
        .then(res => {
          console.log(res.data.result)
          context.commit('SET_HISTORIES', res.data.result)
        })
        .catch(err => console.log(err))
    })
  }
}

const getters = {
  get_histories (state) {
    return state.histories
  }
}
export default {
  state,
  mutations,
  actions,
  getters
}
