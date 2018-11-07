import axios from 'axios'
import VueAxios from 'vue-axios'

const state = {
   center: { lat: 45.508, lng: -73.587 },
   markers: [],
   places: [],
   currentPlace: null,
};

const getters = {

}

const mutations = {
   setCurrentPlace(state){

   }
};

const actions = {
   initMap ({commit}){
      var uluru = {lat: -25.344, lng: 131.036};
      // The map, centered at Uluru
      var map = new google.maps.Map(document.getElementById('map'), {zoom: 4, center: uluru});
      // The marker, positioned at Uluru
      var marker = new google.maps.Marker({position: uluru, map: map});
   },
};

export default {
   state,
   mutations,
   actions,
   getters
};
