<template>
   <div class="hello">
      <h1>I AM HERE</h1>
      <div>
         <p v-on:click="listOfAdmission=dmhasAdmissionList">Admissions: {{listOfAdmission}}</p>
      </div>
      <vue-plotly :data="data" :layout="layout" :options="options"/>
      <vue-plotly :data="data2" :layout="layout2" :options="options2"/>
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
         options: {},
         data2: [],
         layout2: {},
         options2: {}
      }
   },
   computed: {
      ...mapState({
         deathsList: state => state.service.deathsList,
         traceFemaleDeaths: state => state.service.traceFemaleDeaths,
         traceMaleDeaths: state => state.service.traceMaleDeaths,
         dmhasHeroinAdm: state => state.service.dmhasHeroinAdm,
         dmhasOtherOpiateAdm: state => state.service.dmhasOtherOpiateAdm,


      }),

      ...mapGetters({
      }),
   },
   methods: {
      ...mapActions({
        getDeaths_Api: 'getDeaths_Api',
        getDMHAS_Api: 'getDMHAS_Api'
      }),
      getChart1(){
        return this.getDeaths_Api().then(() => {
            this.data.push(this.traceMaleDeaths);
            this.data.push(this.traceFemaleDeaths);
        })
      },
      getChart2(){
        return this.getDMHAS_Api().then(() => {
            this.data2.push(this.dmhasHeroinAdm);
            this.data2.push(this.dmhasOtherOpiateAdm);
        })
      }
   },

   mounted(){

   },
   created() {
      this.getChart1();
      this.getChart2();

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
