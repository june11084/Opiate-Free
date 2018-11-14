import axios from 'axios'
import VueAxios from 'vue-axios'
import { GOOGLE_API_KEY } from '../../.././config'
const state = {
   pharmacyList:[],
   //dmhas addmission for herion and other opiate addiction
   dmhasAdmissionList:[],
   count: 0,
   trace1: {
      x: ["2014-05", "2015-05", "2016-05", "2017-05"],
      y: [20, 14, 23, 60],
      name: 'Heroin',
      type: 'bar'
   },
   trace2: {
      x: ["2014-05", "2015-05", "2016-05", "2017-05"],
      y: [12, 18, 29, 48],
      name: 'Other Opiates and Synthetics',
      type: 'bar'
   },
};

const getters = {

}

const mutations = {
   setPharmacies(state, pharmacyObject){
      if(state.pharmacyList.length === 0){
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
               // console.log(state.pharmacyList.length);
            }
         };
      }
   },
   setDHMASdata(state, dmhasObject){
      if(state.dmhasAdmissionList.length === 0){
         for(var i = 0; i <dmhasObject.length; i++){
            if(("primarydrug" in dmhasObject[i]) && ("admcount" in dmhasObject[i])){
               if(dmhasObject[i].primarydrug === "Other Opiates and Synthetics" || dmhasObject[i].primarydrug === "Heroin" )
               {
                 var admission = {
                   adminYear : null,
                   primaryDrug: null,
                 };
                 admission.adminYear = dmhasObject[i].admyear;
                 admission.primaryDrug = dmhasObject[i].primarydrug;
                 admission.admCount = dmhasObject[i].admcount;
                 state.dmhasAdmissionList.push(admission);
                 console.log(dmhasObject[i].admcount);
               }
            }
         };
      }
      console.log(state.dmhasAdmissionList.length);
   },
};


const actions = {
  getPharmacyApi ({ commit }) {
      console.log("getPharmacyApi started")
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
  getDMHAS_Api ({ commit }) {
      console.log("getDMHA_Api stated")
      return axios({
        method: "get",
        url: 'https://data.ct.gov/resource/e5st-rjge.json ',
        headers: {},
        data: {}
      }).then((response) => {
        console.log("api responded");
        console.log(response);
        let dmhasObject = response.data;
        commit('setDHMASdata', dmhasObject);
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
};

export default {
   state,
   actions,
   mutations,
   getters
};
