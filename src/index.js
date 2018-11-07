import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios'
import VueAxios from 'vue-axios'
import service from './modules/service';
import utill from './modules/service';
import {config} from '../.././config.js'

Vue.use(Vuex, VueAxios, axios);

const debug = process.env.NODE_ENV !== 'production';

export default new Vuex.Store({
   modules: {
      service,
      utill,
   },
   strict: debug,
});
