<template>
  <p>Counter: {{ trackCounter }}</p>
  <button @click="incrementCounter(7)">Increment</button>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'App',
  components: {
  },
  methods: {
    ...mapActions({incrementCounter: 'increment'})
  },
  computed: {
    ...mapGetters({trackCounter: 'getCounter'})
  }
}
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
