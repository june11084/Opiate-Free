import Vue from 'nativescript-vue';
import Vuex from 'vuex';
import axios from 'axios'
import VueAxios from 'vue-axios'
import counter from './modules/counter';

Vue.use(Vuex, VueAxios, axios);

const debug = process.env.NODE_ENV !== 'production';

const store = new Vuex.Store({
  modules: {
    service,
    utill,
  },
  strict: debug,
});

Vue.prototype.$store = store;

module.exports = store;
