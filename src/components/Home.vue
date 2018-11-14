<template>

   <div class="hello">
      <div class="w3-top">
         <div class="w3-bar w3-black w3-card">
            <a href="#" class="w3-bar-item w3-button w3-padding-large">HOME</a>
            <a href="#band" class="w3-bar-item w3-button w3-padding-large w3-hide-small">ABOUT</a>
            <a href="#data" class="w3-bar-item w3-button w3-padding-large w3-hide-small">DATA</a>
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
            <div class="w3-container w3-content w3-padding-64" style="max-width:800px">
               <h2 class="w3-wide w3-center">Data</h2>
               <p class="w3-opacity w3-center"><i>Remember to book your tickets!</i></p><br>

               <ul class="w3-ul w3-border w3-white w3-text-grey">
                  <li class="w3-padding">September <span class="w3-tag w3-red w3-margin-left">Sold out</span></li>
                  <li class="w3-padding">October <span class="w3-tag w3-red w3-margin-left">Sold out</span></li>
                  <li class="w3-padding">November <span class="w3-badge w3-right w3-margin-right">3</span></li>
               </ul>

               <div class="w3-row-padding w3-padding-32" style="margin:0 -16px">
                  <div class="w3-third w3-margin-bottom">
                     <img src="/w3images/newyork.jpg" alt="New York" style="width:100%" class="w3-hover-opacity">
                     <div class="w3-container w3-white">
                        <p><b>New York</b></p>
                        <p class="w3-opacity">Fri 27 Nov 2016</p>
                        <p>Praesent tincidunt sed tellus ut rutrum sed vitae justo.</p>
                        <button class="w3-button w3-black w3-margin-bottom" onclick="document.getElementById('ticketModal').style.display='block'">Buy Tickets</button>
                     </div>
                  </div>
                  <div class="w3-third w3-margin-bottom">
                     <img src="/w3images/paris.jpg" alt="Paris" style="width:100%" class="w3-hover-opacity">
                     <div class="w3-container w3-white">
                        <p><b>Paris</b></p>
                        <p class="w3-opacity">Sat 28 Nov 2016</p>
                        <p>Praesent tincidunt sed tellus ut rutrum sed vitae justo.</p>
                        <button class="w3-button w3-black w3-margin-bottom" onclick="document.getElementById('ticketModal').style.display='block'">Buy Tickets</button>
                     </div>
                  </div>
                  <div class="w3-third w3-margin-bottom">
                     <img src="/w3images/sanfran.jpg" alt="San Francisco" style="width:100%" class="w3-hover-opacity">
                     <div class="w3-container w3-white">
                        <p><b>San Francisco</b></p>
                        <p class="w3-opacity">Sun 29 Nov 2016</p>
                        <p>Praesent tincidunt sed tellus ut rutrum sed vitae justo.</p>
                        <button class="w3-button w3-black w3-margin-bottom" onclick="document.getElementById('ticketModal').style.display='block'">Buy Tickets</button>
                     </div>
                  </div>
               </div>
            </div>
         </div>

         <!-- Ticket Modal -->
         <div id="ticketModal" class="w3-modal">
            <div class="w3-modal-content w3-animate-top w3-card-4">
               <header class="w3-container w3-teal w3-center w3-padding-32">
                  <span onclick="document.getElementById('ticketModal').style.display='none'"
                  class="w3-button w3-teal w3-xlarge w3-display-topright">×</span>
                  <h2 class="w3-wide"><i class="fa fa-suitcase w3-margin-right"></i>Tickets</h2>
               </header>
               <div class="w3-container">
                  <p><label><i class="fa fa-shopping-cart"></i> Tickets, $15 per person</label></p>
                  <input class="w3-input w3-border" type="text" placeholder="How many?">
                  <p><label><i class="fa fa-user"></i> Send To</label></p>
                  <input class="w3-input w3-border" type="text" placeholder="Enter email">
                  <button class="w3-button w3-block w3-teal w3-padding-16 w3-section w3-right">PAY <i class="fa fa-check"></i></button>
                  <button class="w3-button w3-red w3-section" onclick="document.getElementById('ticketModal').style.display='none'">Close <i class="fa fa-remove"></i></button>
                  <p class="w3-right">Need <a href="#" class="w3-text-blue">help?</a></p>
               </div>
            </div>
         </div>

         <div>
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
            <p class="w3-justify">We have created a fictional band website. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
            ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum consectetur
            adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
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

export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data() {
      return{
         myIndex: 0,
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
