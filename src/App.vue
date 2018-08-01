<template>
  <div id="app">
    <!--<img src="./assets/logo.png">-->
    <CountCritical/>
  </div>
</template>

<script>
import CountCritical from 'components/CountCritical.vue'

export default {
  name: 'app',
  components: {
    CountCritical
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
