<template>

   <div class="hello">
      <h1>{{ msg }}</h1>
      <p>
      For guide and recipes on how to configure / customize this project,<br>
      check out the
      <a href="https://cli.vuejs.org" target="_blank" rel="noopener">vue-cli documentation</a>.
      </p>
      <p v-on:click="listOfPharmacies = getPharmacies">Pharmacies: {{listOfPharmacies}}</p>
   </div>
</template>

<script>
import store from '.././store'
import { mapActions } from 'vuex';
import { mapGetters } from 'vuex';
import { mapState } from 'vuex'
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data() {
      return{
        listOfPharmacies:1,
      }
  },
  computed: {
    ...mapState({
      getPharmacies: state => state.service.pharmacyList,
    }),
    ...mapGetters({
    }),
  },
  methods: {
    ...mapActions([
      'getPharmacyApi',
      'hello'
    ])
  },
  created() {
    return this.getPharmacyApi().then(() => {

    });
  }
}
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
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
