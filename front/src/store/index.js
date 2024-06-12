
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
    setAccessToken(state, token){
      state.accessToken = token;
    }
  },
  actions: {
  },
  modules: {
    auth: auth,
    user: user,
    event: event
  }
})