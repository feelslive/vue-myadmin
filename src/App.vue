<template>
  <div id="app">
  	<comhaed></comhaed>
    <leftnav></leftnav>
    <div class="centent">
      <router-view></router-view>
    </div>
  </div>
</template>
<script>
import comhaed from './components/comhaed.vue'
import leftnav from './components/leftnav.vue'
export default {
  name: 'app',
  components:{
  	comhaed,
    leftnav
  }
}
</script>

<style>
#app {
  width: 98%;
  margin: 0 auto;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
}
.centent {
  float: right;
  width: 80%;
  margin-left: 20px;
}
.el-submenu .el-menu-item {
  min-width: 0!important;
}
</style>
