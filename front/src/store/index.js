
import { createStore } from 'vuex'
import auth from './auth'
import user from './user'
import event from './event'

export default createStore({
  state: {
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    auth: auth,
    user: user,
    event: event
  }
})