<template>
   <div class="hello">
      <h1>I AM HERE</h1>
      <div>
         <p v-on:click="listOfAdmission=dmhasAdmissionList">Admissions: {{listOfAdmission}}</p>
      </div>
   </div>
</template>

<script>
import store from '.././store'
import { mapActions } from 'vuex';
import { mapGetters } from 'vuex';
import { mapState } from 'vuex'

export default {
  name: 'GraphData',
  props: {
    msg: String
  },
  data() {
      return{
        listOfAdmission:1,
      }
   },
  computed: {
      ...mapState({
         dmhasAdmissionList: state => state.service.dmhasAdmissionList,
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
