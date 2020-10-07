import axios from 'axios'

const state = {
  histories: [],
  paginationHistory: {}
}

const mutations = {
  SET_HISTORIES (state, payload) {
    state.histories = payload
  },
  SET_PAGINATION_HISTORY (state, payload) {
    state.paginationHistory = payload
  }
}

const actions = {
  getHistories (context, payload) {
    return new Promise((resolve, reject) => {
      axios.get(`${process.env.VUE_APP_BASE_URL}/api/v1/history${payload || ''}`)
        .then(res => {
          context.commit('SET_HISTORIES', res.data.result)
          context.commit('SET_PAGINATION_HISTORY', res.data.pagination)
          resolve(res.data.result)
        })
        .catch(err => reject(err))
    })
  },
  getHistoriesChart (context) {
    return new Promise((resolve, reject) => {
      axios.get(`${process.env.VUE_APP_BASE_URL}/api/v1/history?limit=999999999`)
        .then(res => {
          resolve(res.data.result)
        })
        .catch(err => reject(err))
    })
  },
  postHistory (context, payload) {
    return new Promise((resolve, reject) => {
      axios.post(`${process.env.VUE_APP_BASE_URL}/api/v1/history`, payload)
        .then(res => {
          resolve(res.data.result)
        })
        .catch(err => reject(err))
    })
  }
}

const getters = {
  get_histories (state) {
    return state.histories
  },
  get_page_history (state) {
    return state.paginationHistory
  }
}
export default {
  state,
  mutations,
  actions,
  getters
}
