import Vue from 'vue';
import Vuex from 'vuex';
import counter from '@/store/modules/counter';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    value: 10,
  },
  getters: {

    getValue(state) {
      return state.value;
    },
  },
  mutations: {
    setValue(state, payload) {
      state.value = payload;
    },
  },
  actions: {
    setValueData({ commit }, payload) {
      commit('setValue', payload);
    },
  },
  modules: {
    counter,
  },
});
