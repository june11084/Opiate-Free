<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <p>
      <router-link to="/components/RouteTester.vue">Go to RouteTester</router-link>
    </p>
    <p>
      <router-link to="/">Go to HelloWorld</router-link>
    </p>
    <router-view></router-view>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import RouteTester from './components/RouteTester.vue'

export default {
  name: 'app',
  components: {
    HelloWorld,
    RouteTester
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
