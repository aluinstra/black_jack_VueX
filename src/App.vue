<template>
  <div id="app">
    <BlackJack />
  </div>
</template>

<script>

import BlackJack from "./components/BlackJack.vue";
import Counter from "./components/Counter.vue";

export default {
  name: "App",
  components: {
    BlackJack,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
