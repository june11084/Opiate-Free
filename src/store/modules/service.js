import axios from 'axios'
import VueAxios from 'vue-axios'
import { GOOGLE_API_KEY } from '../../.././config'
const state = {
   pharmacyList:[],
   count: 0
};

const getters = {

}

const mutations = {
   setPharmacies(state, pharmacyObject){
      var count = 0;
      for(var i = 0; i <pharmacyObject.length; i++){
         if("location_1" in pharmacyObject[i]){
            var pharmacy = {
               address : null,
               city: null,
               pharmacy_name: null,
               lat: 0,
               long: 0,
               phone: null,
               state: null,
               zip: null,
            };
            pharmacy.address = pharmacyObject[i].address;
            pharmacy.city = pharmacyObject[i].city;
            pharmacy.pharmacy_name = pharmacyObject[i].pharmacy_name;
            pharmacy.phone = pharmacyObject[i].phone;
            pharmacy.state = pharmacyObject[i].state;
            pharmacy.zip = pharmacyObject[i].zip;
            pharmacy.lat = pharmacyObject[i].location_1.coordinates[1];
            pharmacy.long = pharmacyObject[i].location_1.coordinates[0];
            state.pharmacyList.push(pharmacy);
         }else{
         }
      };
   },
   increment(state) {
      state.count++
      console.log("incremented")
   },
};

const actions = {
   getPharmacyApi ({ commit }) {
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
         commit('setPharmacies', pharmacyObject);
         console.log("setPharmacies finished ");
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
   increment: ({ commit }) => commit('increment'),
};

export default {
   state,
   actions,
   mutations,
   getters
};
