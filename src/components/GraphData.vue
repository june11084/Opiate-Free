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
      adminYear2014: {
        heroinAdmin: null,
        otherOpiateAdmin: null
      },
      adminYear2015: {
        heroinAdmin: null,
        otherOpiateAdmin: null
      },
      adminYear2016: {
        heroinAdmin: null,
        otherOpiateAdmin: null
      },
      adminYear2017: {
        heroinAdmin: null,
        otherOpiateAdmin: null
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
      }),
      groupAdmission(){

        for(let i = 0; i < dmhasAdmissionList; i++)
        {
          if(dmhasAdmissionList[i].adminYear === "2014")
          {
            if(dmhasAdmissionList[i].primaryDrug === "Heroin")
              adminYear2014.heroinAmin += dmhasAdmissionList[i].admCount;
            else
              adminYear2014.otherOpiateAdmin += dmhasAdmissionList[i].admCount;
          }
          else if (dmhasAdmissionList[i].adminYear === "2015") {
            if(dmhasAdmissionList[i].primaryDrug === "Heroin")
              adminYear2015.heroinAmin += dmhasAdmissionList[i].admCount;
            else
              adminYear2015.otherOpiateAdmin += dmhasAdmissionList[i].admCount;
          }
          else if (dmhasAdmissionList[i].adminYear === "2016") {
            if(dmhasAdmissionList[i].primaryDrug === "Heroin")
              adminYear2016.heroinAmin += dmhasAdmissionList[i].admCount;
            else
              adminYear2016.otherOpiateAdmin += dmhasAdmissionList[i].admCount;
          }
          else if (dmhasAdmissionList[i].adminYear === "2017") {
            if(dmhasAdmissionList[i].primaryDrug === "Heroin")
              adminYear2017.heroinAmin += dmhasAdmissionList[i].admCount;
            else
              adminYear2017.otherOpiateAdmin += dmhasAdmissionList[i].admCount;
          }
        }
      }
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
