<template>
  <v-app id="app">
    <page-nav/>
    <router-view/>
  </v-app>
</template>

<script>
import PageNav from '@/components/Header.vue'

export default {
  name: 'App',
  components: {
    PageNav
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
  margin-top: 60px;
}
</style>
