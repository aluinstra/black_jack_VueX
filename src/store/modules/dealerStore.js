export default (maxTurnNumber) => ({
  namespaced: true,
  state: {
    cards: [],
  },
  mutations: {},
  actions: {},
  modules: {},
  getters: {
    score(state) {
      let score = 0;
      for (let card of state.cards) {
        score += card.value;
        if (score > 21 && state.cards.filter((e) => e.value == 11).length > 0) {
          if (card.value == 11) {
            card.value = 1;
            score -= 10;
          }
        }
      }
      return score;
    },
    nextTurn(state, getters) {
      return getters.score < maxTurnNumber;
    },
  },
});
