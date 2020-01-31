import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    playList:[]
  },
  mutations: {
    saveList(state,value){
      state.playList.unshift(value)
    }
  },
  actions: {
  },
  modules: {
  },
  plugins: [createPersistedState()]
})
