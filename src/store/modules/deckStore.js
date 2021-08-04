export default {
  state: {
    ranks: [1, 2, 3, 4, 5, 6, 7, 8, 9, "Jack", "Queen", "King", "Ace"],
    suits: ["Hearts", "Spades", "Daimonds", "Clubs"],
    cards: [],
  },
  mutations: {
    createDeck(state) {
      console.log("hi");
      let value = 0;

      for (const rank of state.ranks) {
        for (const suit of state.suits) {
          if (Number.isNaN(parseInt(rank)) && rank != "Ace") {
            value = 10;
          } else if (rank == "Ace") {
            value = 11;
          } else {
            value = parseInt(rank);
          }
          const card = { rank: rank, suit: suit, value: value };
          state.cards.push(card);
          //   console.log(state.cards);
        }
      }
      console.log(state.cards[10].value);
    },
  },
  actions: {
    dealCard({ rootState, state }) {
      // console.log(context);
      if (rootState.player.cards.length == 0) {
        for (let i = 0; i < 2; i++) {
          const rndInt = Math.floor(Math.random() * state.cards.length) + 1;
          rootState.player.cards.push(state.cards[rndInt]);
          state.cards.splice(rndInt, 1);
        }
      } else {
        const rndInt = Math.floor(Math.random() * state.cards.length) + 1;
        rootState.player.cards.push(state.cards[rndInt]);
        state.cards.splice(rndInt, 1);
      }
      console.log(state.cards);

      if (rootState.dealer.cards.length == 0) {
        for (let i = 0; i < 2; i++) {
          const rndInt = Math.floor(Math.random() * state.cards.length) + 1;
          rootState.dealer.cards.push(state.cards[rndInt]);
          state.cards.splice(rndInt, 1);
        }
      } else {
        const rndInt = Math.floor(Math.random() * state.cards.length) + 1;
        rootState.dealer.cards.push(state.cards[rndInt]);
        state.cards.splice(rndInt, 1);
      }
    },
  },
  modules: {},
};
