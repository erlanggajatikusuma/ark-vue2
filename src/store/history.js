import axios from 'axios'

const state = {
  histories: [],
  historiesIncome: [],
  historiesMonth: []
}

const mutations = {
  SET_HISTORIES (state, payload) {
    state.histories = payload
  },
  SET_HISTORIES_INCOME (state, payload) {
    state.historiesIncome = payload
  },
  SET_HISTORIES_MONTH (state, payload) {
    state.historiesMonth = payload
  }
}

const actions = {
  getHistories (context) {
    return new Promise((resolve, reject) => {
      axios.get(`${process.env.VUE_APP_BASE_URL}/api/v1/history`)
        .then(res => {
          console.log(res.data.result)
          context.commit('SET_HISTORIES', res.data.result)
        })
        .catch(err => console.log(err))
    })
  },
  postHistory (context, payload) {
    console.log(payload)
    return new Promise((resolve, reject) => {
      axios.post(`${process.env.VUE_APP_BASE_URL}/api/v1/history`, payload)
        .then(res => {
          console.log(res.data.result)
          resolve(res.data.result)
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
