<template>
  <div id="app">
  	<comhaed></comhaed>
    <router-view></router-view>
  </div>
</template>

<script>
import comhaed from './components/comhaed.vue'
export default {
  name: 'app',
  components:{
  	comhaed
  }
}
</script>

<style>
#app {
  width: 80%;
  margin: 0 auto;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
