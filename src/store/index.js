import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    token: localStorage['token'] ? localStorage['token'] : null
  },
  getters: {
    token: state => {
      return state.token
    }
  },
  mutations: {
    delToken: (state) => {
      state.token = null
      console.log('tokendel')
      localStorage.removeItem('token')
    },
    setToken: (state, token) => {
      state.token = token
      console.log('setToken')
      localStorage.setItem('token', token)
    }
  }
})

export default store
