<template>
   <div class="hello">
      <h1>{{ msg }}</h1>
      <div>
         <div>
            <h2>Search and add a pin</h2>
            <label>
               <gmap-autocomplete
               @place_changed="setPlace">
               </gmap-autocomplete>
               <button @click="addMarker">Add</button>
            </label>
            <br/>

         </div>
         <br>
         <gmap-map
            :center="center"
            :zoom="12"
            style="width:100%;  height: 400px;"
            >
            <gmap-marker
            :key="index"
            v-for="(m, index) in markers"
            :position="m.position"
            @click="center=m.position"
            ></gmap-marker>
         </gmap-map>
      </div>
   </div>
</template>

<script>
import store from '.././store'
import { mapActions } from 'vuex';
import { mapGetters } from 'vuex';
import { mapState } from 'vuex'
export default {
   name: 'googleMaps',
   props: {
   msg: String
   },
   data() {
      return{
         listOfPharmacies:1,
         center: { lat: 45.508, lng: -73.587 },
         markers: [],
         places: [],
         currentPlace: null
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
         'hello',
         'initMap'
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
