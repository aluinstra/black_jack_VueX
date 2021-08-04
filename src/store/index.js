import Vue from "vue";
import Vuex from "vuex";

import deckStore from "./modules/deckStore";
import dealerStore from "./modules/dealerStore";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    player: dealerStore(21),
    dealer: dealerStore(17),
    deck: deckStore,
  },
  state: {},
  mutations: {},
  actions: {},
  getters: {},
});
