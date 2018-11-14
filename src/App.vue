<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png">
    <ul>
      <li><router-link to="/">HelloWorld</router-link></li>
      <li><router-link to="/components/RouteTester.vue">RouteTester</router-link></li>
      <li><router-link to="/components/GraphData.vue">GraphData</router-link></li>
    </ul> -->
    <router-view></router-view>
  </div>
</template>

<script>
import './assets/w3.css';
import Home from './components/Home.vue'
import RouteTester from './components/RouteTester.vue'
import GraphData from './components/GraphData.vue'

export default {
  name: 'app',
  components: {
    Home,
    RouteTester,
    GraphData
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
