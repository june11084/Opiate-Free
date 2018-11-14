import axios from 'axios'
import VueAxios from 'vue-axios'
import { GOOGLE_API_KEY } from '../../.././config'
const state = {
   pharmacyList:[],
   //deaths admission for herion and other opiate addiction
   deathsList:[],
   count: 0,
   traceMaleDeaths: {
      x: ["Heroin", "Fentanyl", "Cocaine", "Oxycodone", "Oxymorphone", "EtOH", "Hydrocodone", "Benzodiazepine", "Methadone", "Amphet", "Tramad", "Morphine(not heroin)", "Other"],
      y: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      name: 'Male',
      type: 'bar'
   },
   traceFemaleDeaths: {
      x: ["Heroin", "Fentanyl", "Cocaine", "Oxycodone", "Oxymorphone", "EtOH", "Hydrocodone", "Benzodiazepine", "Methadone", "Amphet", "Tramad", "Morphine(not heroin)", "Other"],
      y: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      name: 'Female',
      type: 'bar'
   },
   dmhasHeroinAdm: {
      x:["2013","2014","2015","2016"],
      y:[0,0,0,0],
      name: 'Heroin',
      type: 'bar',
   },
   dmhasOtherOpiateAdm: {
      x:["2013","2014","2015","2016"],
      y:[0,0,0,0],
      name: 'Other Opiates and Synthetics',
      type: 'bar',
   }
}

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

   setDeathData(state, deathsObject){
      if(state.traceMaleDeaths.y[0] === 0){
          for(var i = 0; i <deathsObject.length; i++){
            //if male
            if(deathsObject[i].sex === "Male")
            {
              if("heroin" in deathsObject[i])
                state.traceMaleDeaths.y[0]++;
              if("fentanyl" in deathsObject[i])
                state.traceMaleDeaths.y[1]++;
              if("coc" in deathsObject[i])
                state.traceMaleDeaths.y[2]++;
              if("oxyc" in deathsObject[i])
                state.traceMaleDeaths.y[3]++;
              if("oxym" in deathsObject[i])
                state.traceMaleDeaths.y[4]++;
              if("etoh" in deathsObject[i])
                state.traceMaleDeaths.y[5]++;
              if("hydr_cod" in deathsObject[i])
                state.traceMaleDeaths.y[6]++;
              if("benzo_s" in deathsObject[i])
                state.traceMaleDeaths.y[7]++;
              if("methadone" in deathsObject[i])
                state.traceMaleDeaths.y[8]++;
              if("amphet" in deathsObject[i])
                state.traceMaleDeaths.y[9]++;
              if("tramad" in deathsObject[i])
                state.traceMaleDeaths.y[10]++;
              if("morphine_not_heroin" in deathsObject[i])
                state.traceMaleDeaths.y[11]++;
              if("other" in deathsObject[i])
                state.traceMaleDeaths.y[12]++;
            }
            //if female
            else
            {
              if("heroin" in deathsObject[i])
                state.traceFemaleDeaths.y[0]++;
              if("fentanyl" in deathsObject[i])
                state.traceFemaleDeaths.y[1]++;
              if("coc" in deathsObject[i])
                state.traceFemaleDeaths.y[2]++;
              if("oxyc" in deathsObject[i])
                state.traceFemaleDeaths.y[3]++;
              if("oxym" in deathsObject[i])
                state.traceFemaleDeaths.y[4]++;
              if("etoh" in deathsObject[i])
                state.traceFemaleDeaths.y[5]++;
              if("hydr_cod" in deathsObject[i])
                state.traceFemaleDeaths.y[6]++;
              if("benzo_s" in deathsObject[i])
                state.traceFemaleDeaths.y[7]++;
              if("methadone" in deathsObject[i])
                state.traceFemaleDeaths.y[8]++;
              if("amphet" in deathsObject[i])
                state.traceFemaleDeaths.y[9]++;
              if("tramad" in deathsObject[i])
                state.traceFemaleDeaths.y[10]++;
              if("morphine_not_heroin" in deathsObject[i])
                state.traceFemaleDeaths.y[11]++;
              if("other" in deathsObject[i])
                state.traceFemaleDeaths.y[12]++;
            }
          };
      }
   },

   setDMHAS(state, dmhasObject){
     if(state.dmhasHeroinAdm.y[0] === 0){
        for(var i = 0; i <dmhasObject.length; i++){
          if(("primarydrug" in dmhasObject[i]) && ("admcount" in dmhasObject[i])){
            if(dmhasObject[i].primarydrug === "Other Opiates and Synthetics"){
              switch(dmhasObject[i].admyear){
                case "2013":
                  state.dmhasOtherOpiateAdm.y[0] += parseInt(dmhasObject[i].admcount);
                  break;
                case "2014":
                  state.dmhasOtherOpiateAdm.y[1] += parseInt(dmhasObject[i].admcount);
                  break;
                case "2015":
                  state.dmhasOtherOpiateAdm.y[2] += parseInt(dmhasObject[i].admcount);
                  break;
                case "2016":
                  state.dmhasOtherOpiateAdm.y[3] += parseInt(dmhasObject[i].admcount);
                  break;
              }
            }
            if(dmhasObject[i].primarydrug === "Heroin"){
              switch(dmhasObject[i].admyear){
                case "2013":
                  state.dmhasHeroinAdm.y[0] += parseInt(dmhasObject[i].admcount);
                  break;
                case "2014":
                  state.dmhasHeroinAdm.y[1] += parseInt(dmhasObject[i].admcount);
                  break;
                case "2015":
                  state.dmhasHeroinAdm.y[2] += parseInt(dmhasObject[i].admcount);
                  break;
                case "2016":
                  state.dmhasHeroinAdm.y[3] += parseInt(dmhasObject[i].admcount);
                  break;
              }
            }
        }
     };
   }
}
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

  getDeaths_Api ({ commit }) {
      console.log("getDeaths_Api stated")
      return axios({
        method: "get",
        url: 'https://data.ct.gov/resource/deaths.json?$limit=5000',
        headers: {},
        data: {}
      }).then((response) => {
        console.log("api responded");
        console.log(response);
        let deathsObject = response.data;
        commit('setDeathData', deathsObject);
        console.log(deathsObject.length);
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
       console.log("get_Api stated")
       return axios({
         method: "get",
         url: 'https://data.ct.gov/resource/e5st-rjge.json?$limit=22000',
         headers: {},
         data: {}
       }).then((response) => {
         console.log("api responded");
         console.log(response);
         let dmhasObject = response.data;
         commit('setDMHAS', dmhasObject);
         console.log(dmhasObject.length);
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
