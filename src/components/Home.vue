<template>

   <div class="hello">
      <div class="w3-top">
         <div class="w3-bar w3-black w3-card">
            <a href="#" class="w3-bar-item w3-button w3-padding-large">HOME</a>
            <a href="#band" class="w3-bar-item w3-button w3-padding-large w3-hide-small">ABOUT</a>
            <a href="#data" class="w3-bar-item w3-button w3-padding-large w3-hide-small">DATA</a>
            <a href="#tool" class="w3-bar-item w3-button w3-padding-large w3-hide-small">TOOL</a>
            <a href="#contact" class="w3-bar-item w3-button w3-padding-large w3-hide-small">CONTACT</a>
            <div class="w3-dropdown-hover w3-hide-small">
               <button class="w3-padding-large w3-button" title="More">MORE <i class="fa fa-caret-down"></i></button>
               <div class="w3-dropdown-content w3-bar-block w3-card-4">
                  <a href="#" class="w3-bar-item w3-button">Graph</a>
                  <a href="#" class="w3-bar-item w3-button">Extras</a>
                  <a href="#" class="w3-bar-item w3-button">Media</a>
               </div>
            </div>
         </div>
      </div>
      <!-- Page content -->
      <div class="w3-content" style="max-width:2000px;margin-top:56px">
         <!-- Automatic Slideshow Images -->
         <carousel :per-page="1" autoplay :autoplayHoverPause="false" :loop="true" :autoplayTimeout="5500">
          <slide>
            <div class="mySlides w3-display-container w3-center">
              <img src="../assets/images/freeFamily.jpeg" style="width:100%" alt="Freedom pose" >
              <div class="w3-display-bottommiddle w3-container w3-text-white w3-hide-small">
                <div class="quote">
                  <p><i>Be strong enough to let go and wise enough to wait for what you deserve.</i></p>
                  <p><i> - Cumberlandheights.org </i></p>
                </div>
              </div>
            </div>
          </slide>
          <slide>
            <div class="mySlides w3-display-container w3-center">
              <img src="../assets/images/freefemale.jpeg" style="width:100%" alt="Freedom pose">
              <div class="w3-display-bottommiddle w3-container w3-text-white w3-hide-small">
                <div class="quote">
                  <p><i>Be strong enough to let go and wise enough to wait for what you deserve.</i></p>
                  <p><i> - Cumberlandheights.org </i></p>
                </div>
              </div>
            </div>
          </slide>
          <slide>
            <div class="mySlides w3-display-container w3-center">
              <img src="../assets/images/manOnBike.jpeg" style="width:100%" alt="Freedom pose">
              <div class="w3-display-bottommiddle w3-container w3-text-white w3-hide-small">
                <div class="quote">
                  <p><i>Be strong enough to let go and wise enough to wait for what you deserve.</i></p>
                  <p><i> - Cumberlandheights.org </i></p>
                </div>
              </div>
            </div>
          </slide>
         </carousel>

         <!-- The Data Section -->
         <div class="w3-black" id="data">
            <carousel :per-page="1">
             <slide>
                <vue-plotly :data="data" :layout="layout" :options="options"/>
             </slide>
             <slide>
                <vue-plotly :data="data2" :layout="layout2" :options="options2"/>
             </slide>
            </carousel>
         </div>
         <div id="tool">
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
               style="width:100%;  height: 900px;"
               >
            </GmapMap>
         </div>
         <!-- The About Section -->
         <div class="w3-container w3-content w3-center w3-padding-64" style="max-width:800px" id="band">
            <h2 class="w3-wide">The Opiate Crisis</h2>
            <p style="font-size: 21px">Addiction to Opiate subtances is serious problem in Connecticut. While there has been a decrease in pharmaceutical and other synthetics deaths over the years, deaths in heroin continue to rise. This application is intended to help to those stuggling with addiction. By providing a way to locate the the nearest Pharmacy equipped to distribute Naloxone, a medication designed to rapidly reverse opoid overdose, we hope to prevent families and individuals from dealing with potential death from overdose. However, this is only an immediate solution to a continuous and relentless problem. We encourage those facing addiction to seek long term rehabilative help.</p>
            <h6 class="w3-wide">The Team</h6>
            <div class="w3-row ">
               <div class="w3-half">
                  <p>Jun Li</p>
               </div>
               <div class="w3-half">
                  <p>Vu Truong</p>
               </div>
            </div>
         </div>
         <!-- The Contact Section -->
         <div class="w3-container w3-content w3-padding-64" style="max-width:800px" id="contact">
            <h2 class="w3-wide w3-center">CONTACT</h2>
            <div class="w3-row w3-padding-32">
               <div class="w3-col m6 w3-large w3-margin-bottom">
                  <i class="fa fa-map-marker" style="width:30px"></i> Connecticut, US<br>
                  <i class="fa fa-phone" style="width:30px"></i> Phone: +00 151515<br>
                  <i class="fa fa-envelope" style="width:30px"> </i> Email: mail@mail.com<br>
               </div>
               <div class="w3-col m6">
                  <form action="/action_page.php" target="_blank">
                     <div class="w3-row-padding" style="margin:0 -16px 8px -16px">
                        <div class="w3-half">
                           <input class="w3-input w3-border" type="text" placeholder="Name" required name="Name">
                        </div>
                        <div class="w3-half">
                           <input class="w3-input w3-border" type="text" placeholder="Email" required name="Email">
                        </div>
                     </div>
                     <input class="w3-input w3-border" type="text" placeholder="Message" required name="Message">
                     <button class="w3-button w3-black w3-section w3-right" type="submit">SEND</button>
                  </form>
               </div>
            </div>
         </div>
      <!-- End Page Content -->
      </div>

   </div>
</template>

<script>
import store from '.././store'
import { mapActions } from 'vuex';
import { mapGetters } from 'vuex';
import { mapState } from 'vuex'
import { GOOGLE_API_KEY } from '../.././config'
import VuePlotly from '@statnett/vue-plotly'

export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  components: {
     VuePlotly
  },
  data() {
      return{
         myIndex: 0,
         currentLocation:null,
         map: null,
         center:{ lat: 0, lng: 0 },
         data: [],
         layout: {
           title: 'Accidental Drug Related Deaths 2012-2017'
         },
         options: {},
         data2: [],
         layout2: {
           title: 'Admissions to DMHAS Addiction Treatment For Opiate By Year'
         },
         options2: {}
      }
   },
   computed: {
      ...mapState({
         pharmacyList: state => state.service.pharmacyList,
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
         getPharmacyApi: 'getPharmacyApi',
         increment: 'increment',
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
      },
      newLocation(place) {
         this.currentLocation = place;
         console.log(this.currentLocation.name)
         this.setLocation();
      },
      setLocation() {
         this.map.panTo({lat:this.currentLocation.geometry.location.lat(), lng: this.currentLocation.geometry.location.lng()})
         this.map.setZoom(15)
      },
      geoLocate: function() {
         navigator.geolocation.getCurrentPosition(position => {
            this.center = {
               lat: position.coords.latitude,
               lng: position.coords.longitude
            };
            this.map.setZoom(14)
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
                     maxWidth: 600,
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
.quote {
  font-size:16px;
  position: relative;
  max-width: inherit;
  max-height: inherit;
}

</style>
