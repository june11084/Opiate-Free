<template>
   <div class="hello">
      <h1>{{ msg }}</h1>
      <div>
         <p v-on:click="listOfPharmacies=pharmacyList">Pharmacies: {{listOfPharmacies}}</p>
         <br>
         <GmapMap
            ref="mapRef"
            :center="{lat:41.519813, lng:-72.661742}"
            :zoom="12"
            style="width:100%;  height: 400px;"
            >
         </GmapMap>
      </div>
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
         pharmacyList: state => state.service.pharmacyList,
      }),
      ...mapGetters({
      }),
   },
   methods: {
      ...mapActions({
         getPharmacyApi: 'getPharmacyApi',
         increment: 'increment'
      })
   },
   mounted(){
      return this.getPharmacyApi().then(() => {
         this.$refs.mapRef.$mapPromise.then((map) => {
            console.log(this.pharmacyList.length)
            var markerArray = [];
            for(var i=0;i<this.pharmacyList.length;i++){
               var marker = new google.maps.Marker({
                  position: { lat: this.pharmacyList[i].lat, lng: this.pharmacyList[i].long },
                  title: this.pharmacyList[i].pharmacy_name
               });
               markerArray.push(marker);
               markerArray[i].setMap(map);
            }
         })
      });
   },
   created() {
      // return this.getPharmacyApi().then(() => {
      //    console.log(this.pharmacyList.length)
      // });
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
