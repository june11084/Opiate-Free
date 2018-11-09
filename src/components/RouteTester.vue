<template>
  <div class = "hello">
  <h1>{{msg}}</h1>
  <h2>This is not Hello World</h2>
  </div>
</template>

<script>
import store from '.././store'
import { mapActions } from 'vuex';
import { mapGetters } from 'vuex';
import { mapState } from 'vuex'
export default {
  name: 'RouteTester',
  data() {
      return{
        msg: "RouteTester",
      }
  }
}
console.log("Routing Tester");
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
</style>
