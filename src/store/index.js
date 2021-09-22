import Vue from 'vue'
import Vuex from 'vuex'
<<<<<<< HEAD

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
=======
import * as Types from './types'
import actions from "./actions";
import mutations from "./mutations";
import getters from "./getters";

Vue.use(Vuex)

const state = {
  cartList: []
}
export default new Vuex.Store({
  state,
  mutations,
  getters,
  actions,
  modules: {

>>>>>>> 05c2bac (update commit)
  }
})
