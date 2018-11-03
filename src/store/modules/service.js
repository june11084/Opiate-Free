import axios from 'axios'
import VueAxios from 'vue-axios'

const state = {
  pharmacies: [{
        ":@computed_region_dam5_q64j": "1040",
        ":@computed_region_m4y2_whse": "161",
        ":@computed_region_nhmp_cq6b": "212",
        ":@computed_region_snd5_k6zv": "9",
        "address": "5 RIVER ROAD",
        "city": "WILTON",
        "credential": "PCY.0001849",
        "credentialid": "351206",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -73.430411,
                41.190978
            ]
        },
        "location_1_address": "5 RIVER ROAD",
        "location_1_city": "CT",
        "location_1_zip": "06897",
        "pharmacy_name": "STOP & SHOP PHARMACY #658",
        "phone": "2038342204",
        "state": "CT",
        "zip": "06897"
    },
    {
        ":@computed_region_dam5_q64j": "1040",
        ":@computed_region_m4y2_whse": "161",
        ":@computed_region_nhmp_cq6b": "212",
        ":@computed_region_snd5_k6zv": "9",
        "address": "28 CENTER ST",
        "city": "WILTON",
        "credential": "PCY.0002343",
        "credentialid": "1383339",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -73.43278,
                41.194945
            ]
        },
        "location_1_address": "28 CENTER ST",
        "location_1_city": "CT",
        "location_1_zip": "06897-3007",
        "pharmacy_name": "LANGS PHARMACY OF WILTON CENTER",
        "phone": "(203) 241-4711",
        "state": "CT",
        "zip": "06897-3007"
    }],
};

const getters = {

}

const mutations = {
  setPharmacies(state, pharmacyObject){
    state.pharmacies = pharmacyObject;
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
      console.log(state.pharmacies);
    }).catch(function (error) {
      if (error.response) {
        console.log(error.response.data);
        console.log(error.response.status);
        console.log(error.response.headers);
        } else if (error.request) {
          console.log(error.request);
        } else {
          console.log('Error', error.message);
        }
        console.log(error.config);
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
