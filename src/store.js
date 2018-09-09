import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    clickedImg: {
      imgSrc: '',
      title: ''
    }
  },
  mutations: {
    setClickedImg(state, payload) {
      state.clickedImg = payload;
    }
  },
  actions: {
    setClickedImg(state, payload) {
      state.commit('setClickedImg', payload);
    }
  },
  getters: {
    clickedImg(state) {
      return state.clickedImg;
    }
  }
})
