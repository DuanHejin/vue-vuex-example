import Vue from 'vue';
import Vuex from 'vuex';
import {
  objectModule
} from './modules';
import mutations from './mutations';
import actions from './actions';
import getters from './getters';

Vue.use(Vuex);

const state = {
  isLoading: true,
  objectList: [],
  object: null,
  cart: []
};

const store = new Vuex.Store({
  state,
  mutations,
  actions,
  getters,
  modules: {
    objectModule
  }
});

export default store;