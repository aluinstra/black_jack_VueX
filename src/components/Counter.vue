<template>
    <div>
        <button type="button" @click="incrementCounter">One Up!</button>
        <p>{{count}}</p>
        <input type="number" min="0" max="10" v-model.number="amount">
    </div>
</template>

<script>
export default {
  name: 'Counter',
  data() {
      return {amount: 1}
  },
  props: {
  },
  computed: {
    count () {
      return this.$store.state.count;
    }
  },

  methods: {
      incrementCounter() {
          this.$store.commit('increment', this.amount)
      },

      setIncrement () {

      },

  },
}
</script>