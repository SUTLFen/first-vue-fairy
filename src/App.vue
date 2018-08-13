<template>
  <div id="app">
    <p ><a href="#/">Fairy的组件库</a></p>
    <router-view></router-view>
  </div>
</template>

<script>
  import index from './pages/index'

export default {
  name: 'App',
  components: index
}

</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}



</style>
