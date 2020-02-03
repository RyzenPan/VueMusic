import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    playList:[],
    likeList:[],
    nowPlay:''
  },
  mutations: {
    saveList(state,value){
      state.playList.unshift(value)
    },
    delLikeList(state,value){
      let list =state.likeList
      const index = list.findIndex(item => {
        return item.id === value.id
      })
      state.likeList.splice(index,1)
    },
    saveLikeList(state,value){
      state.likeList.unshift(value)
    },
    nowPlayID(state,value){
      state.nowPlay = value
    }
  },
  actions: {
  },
  modules: {
  },
  plugins: [createPersistedState()]
})
