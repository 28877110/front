import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    token: localStorage['token'],
    indexCar: 0
  },
  getters: {
    token: state => {
      return state.token
    },
    indexCar: state => {
      return state.indexCar
    }
  },
  mutations: {
    delToken: (state) => {
      console.log('tokendel' + state.token)
      state.token = null
      localStorage.removeItem('token')
    },
    setToken: (state, token) => {
      state.token = token
      console.log('setToken' + state.token)
      localStorage.setItem('token', token)
    }
  }
})

export default store
