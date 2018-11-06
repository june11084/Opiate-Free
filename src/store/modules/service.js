import axios from 'axios'
import VueAxios from 'vue-axios'
import { GOOGLE_API_KEY } from '../../.././config'
const state = {
   pharmacyList:[],
   pharmacies:
   {
      address : null,
      city: null,
      location_name: null,
      lat: 0,
      long: 0,
      phone: null,
      state: null,
      zip: null,
   },
   API_KEY: GOOGLE_API_KEY,
};

const getters = {

}

const mutations = {
   setPharmacies(state, pharmacyObject){
      var count = 0;
      for(var i = 0; i <pharmacyObject.length; i++){
         state.pharmacies.address = pharmacyObject[i].address;
         state.pharmacies.city = pharmacyObject[i].city;
         state.pharmacies.location_name = pharmacyObject[i].location_name;
         state.pharmacies.phone = pharmacyObject[i].phone;
         state.pharmacies.state = pharmacyObject[i].state;
         state.pharmacies.zip = pharmacyObject[i].zip;
         if("location_1" in pharmacyObject[i]){
            state.pharmacies.lat = pharmacyObject[i].location_1.coordinates[1];
            state.pharmacies.long = pharmacyObject[i].location_1.coordinates[0];
            count++;
         }else{
         }
         state.pharmacyList.push(state.pharmacies);
      };
      console.log(count)
   }
};

const actions = {
   getPharmacyApi ({commit}) {
      console.log("getProfileApi started")
      return axios({
         method: "get",
         url: `https://data.ct.gov/resource/4vs4-3cb3.json`,
         headers: {},
         data: {}
      }).then((response) => {
         console.log("api responded");
         console.log(response);
         let pharmacyObject = response.data;
         commit('setPharmacies', pharmacyObject)
         console.log("setPharmacies finished ");
         console.log(state.API_KEY);
      }).catch(function (error) {
         if(error.response) {
            console.log(error.response.data);
            console.log(error.response.status);
            console.log(error.response.headers);
         }else if(error.request) {
            console.log(error.request);
         }else{
            console.log('Error', error.message);
            console.log(error.config);
         }
      });
   },
   hello({commit}){
      console.log("hi")
   }
};

export default {
   state,
   mutations,
   actions,
   getters
};
