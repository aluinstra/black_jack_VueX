<template>
  <div>
    <button type="button" @click="createDeck">Start</button>
    <br>
    <br>
    <button type="button" @click="dealCard">Deal</button>

    <!-- <div v-for="(card, index) in cards" :key="index">
      <p>{{card.rank}}</p>
      <p>{{card.suit}}</p>
      <p>{{card.value}}</p>
      <hr>
    </div> -->
      
<table>
  <thead>
    <td>player</td>
    <td>cards</td>
    <td>score</td>
  </thead>
  <tbody>
    <tr>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td></td>
      <td></td>
      <td></td>
    </tr>
  </tbody>
  <tfoot>
    <tr>
      <td></td>
      <td></td>
      <td></td>
    </tr>
  </tfoot>
</table>


    <div v-for="(card, index) in player" :key="index">
      <p>{{card.rank}}</p>
      <p>{{card.suit}}</p>
      <p>{{card.value}}</p>
      <hr>
    </div>

    <p>Score {{playerScore}}</p>
    <p>NextTurn {{nextTurnPlayer}}</p>


    <br>
   
   <div v-for="(card, index) in dealer" :key="index">
      <p>{{card.rank}}</p>
      <p>{{card.suit}}</p>
      <p>{{card.value}}</p>
      <hr>
    </div>

    <p>Score {{dealerScore}}</p>
    <p>NextTurn {{nextTurnDealer}}</p>


  </div>

  
  
</template>

<script>
export default {
  name: 'BlackJack',
  props: {
  },
  methods: {
    createDeck () {
      this.$store.commit('createDeck')
    },
    dealCard () {
      this.$store.dispatch('dealCard')
    }
  },
  computed: {
    cards () {
      return this.$store.state.cards
    },
    player () {
      return this.$store.state.player.cards
    },
    dealer () {
      return this.$store.state.dealer.cards
    },
      playerScore () {
      return this.$store.getters["player/score"]
    },
    dealerScore () {
      return this.$store.getters["dealer/score"]
    },
     nextTurnPlayer () {
      return this.$store.getters["player/nextTurn"]
    },
    nextTurnDealer () {
      return this.$store.getters["dealer/nextTurn"]
    }
  },
}
</script>

