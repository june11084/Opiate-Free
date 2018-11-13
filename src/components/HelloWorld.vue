<template>

   <div class="hello">
      <h1>{{ msg }}</h1>
      <div>
         <p v-on:click="listOfPharmacies=pharmacyList">Pharmacies: {{listOfPharmacies}}</p>
         <br>
         <h2>Search Location</h2>
         <label>
            <gmap-autocomplete
               @place_changed="newLocation">
            </gmap-autocomplete>
            <button @click="setLocation">Go</button>
         </label>
         <p></p>
         <GmapMap
            ref="mapRef"
            :center="center"
            :zoom="9"
            style="width:100%;  height: 600px;"
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
import { GOOGLE_API_KEY } from '../.././config'

export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data() {
      return{
         listOfPharmacies:1,
         currentLocation:null,
         map: null,
         center:{ lat: 0, lng: 0 },
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
      }),
      newLocation(place) {
         this.currentLocation = place;
         console.log(this.currentLocation.name)
         this.setLocation();
      },
      setLocation() {
         this.map.panTo({lat:this.currentLocation.geometry.location.lat(), lng: this.currentLocation.geometry.location.lng()})
         this.map.setZoom(13)
      },
      geoLocate: function() {
         navigator.geolocation.getCurrentPosition(position => {
            this.center = {
               lat: position.coords.latitude,
               lng: position.coords.longitude
            };
            this.map.setZoom(12)
         });
      },
      initMap(){
         return this.getPharmacyApi().then(() => {
            this.$refs.mapRef.$mapPromise.then((map) => {
               this.geoLocate();
               this.map = map;
               var markerArray = [];
               for(var i=0;i<this.pharmacyList.length;i++){
                  var contentString =`
                  <div class="person">
                  <h2>${this.pharmacyList[i].pharmacy_name}</h2>
                  <h3>${this.pharmacyList[i].address}</h3>
                  <p><b>City:</b> ${this.pharmacyList[i].city}<br/><b>Zip:</b> ${this.pharmacyList[i].zip}<b>  Phone:</b> ${this.pharmacyList[i].phone}</p>
                  <p><img src="https://maps.googleapis.com/maps/api/streetview?size=350x120&location=${this.pharmacyList[i].lat},${this.pharmacyList[i].long}&key=${GOOGLE_API_KEY}"></p>
                  <a href="http://www.google.com/maps/place/${this.pharmacyList[i].lat},${this.pharmacyList[i].long}" target="_blank" class="w3-button w3-block w3-round-xlarge w3-blue"><i><b>Directions</b></i></a>
                  </div>
                  `;
                  var marker = new google.maps.Marker({
                     position: { lat: this.pharmacyList[i].lat, lng: this.pharmacyList[i].long },
                     title: this.pharmacyList[i].pharmacy_name,
                     info: contentString
                  });
                  var infowindow = new google.maps.InfoWindow({
                     content: contentString,
                     maxWidth: 400,
                  });
                  markerArray.push(marker);
                  markerArray[i].addListener('click', function() {
                     infowindow.setContent(this.info);
                     infowindow.open(this.map, this);
                  });
                  markerArray[i].setMap(this.map);
               }
            })
         });
      },
   },
   mounted(){
      this.initMap();
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
