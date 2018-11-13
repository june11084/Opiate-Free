<template>
   <div class="hello">
      <h1>I AM HERE</h1>
      <div>
         <p v-on:click="listOfAdmission=dmhasAdmissionList">Admissions: {{listOfAdmission}}</p>
      </div>
      <vue-plotly :data="data" :layout="layout" :options="options"/>
   </div>
</template>

<script>
import store from '.././store'
import { mapActions } from 'vuex';
import { mapGetters } from 'vuex';
import { mapState } from 'vuex'
import VuePlotly from '@statnett/vue-plotly'

export default {
   name: 'GraphData',
   props: {
      msg: String
   },
   components: {
      VuePlotly
   },
   data() {
      return{
         listOfAdmission:1,
         data: [],
         layout: {},
         options: {}
      }
   },
   computed: {
      ...mapState({
         dmhasAdmissionList: state => state.service.dmhasAdmissionList,
         trace1: state => state.service.trace1,
         trace2: state => state.service.trace2,
      }),
      ...mapGetters({
      }),
   },
   methods: {
      ...mapActions({
         getDMHAS_Api: 'getDMHAS_Api'
      })
   },
   mounted(){

   },
   created() {
      return this.getDMHAS_Api().then(() => {
         console.log(this.dmhasAdmissionList.length)
         this.data.push(this.trace1);
         this.data.push(this.trace2);
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
