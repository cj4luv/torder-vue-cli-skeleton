import Vue from 'vue';
import Vuex from 'vuex';
import createPersistedState from 'vuex-persistedstate';

Vue.use(Vuex);

const mutations = {};

const actions = {};

const getters = {};

const plugins = [
  createPersistedState(),
];

const state = {};

const storeInit = {
  state,
  plugins,
  mutations,
  actions,
  getters,
};

const store = new Vuex.Store(storeInit);

export default store;