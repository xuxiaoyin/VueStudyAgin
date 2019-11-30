import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const cart = {
  state: {
    list: []
  },
  mutations: {
    addCart(state, good) {
      const ret = state.list.find(v => v.id === good.id)
      if(ret) {
        ret.count += 1
      } else {
        state.list.push({...good, count:1,active: true})
      }
    }
  }
}

export default new Vuex.Store({
  state: {
    isLogin: false,
  },
  mutations: {
    login(state) {
      state.isLogin = true
    }
  },
  actions: {
    requestLogin(context) {
      return new Promise(resolve => {
        setTimeout(() => {
          context.commit('login')
          resolve(true)
        }, 1000)
      })
    }
  },
  modules: {
    cart
  }
})
