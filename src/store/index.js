import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios'
import VueAxios from 'vue-axios'
import service from './modules/service';
import utill from './modules/utill';
//import Plotly from 'plotly.js/dist/plotly.min'
// import googleMaps from './modules/googleMaps';
import {GOOGLE_API_KEY} from '../.././config.js'
import * as VueGoogleMaps from 'vue2-google-maps'

Vue.use(Vuex, VueAxios, axios);
Vue.use(VueGoogleMaps, {
  load: {
    key: GOOGLE_API_KEY,
    libraries: "places" // necessary for places input
  }
});
const debug = process.env.NODE_ENV !== 'production';

export default new Vuex.Store({
   modules: {
      service,
      utill,
   },
   strict: debug,
   namespaced: true,
});
