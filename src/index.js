import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios'
<<<<<<< HEAD
import VueRouter from 'vue-router'
=======
>>>>>>> 0952e754d4ffe893649e42a960505a246633e76f
import VueAxios from 'vue-axios'
import service from './modules/service';
import utill from './modules/service';
import {config} from '../.././config.js'

Vue.use(Vuex, VueAxios, axios);

<<<<<<< HEAD


const debug = process.env.NODE_ENV !== 'production';


=======
const debug = process.env.NODE_ENV !== 'production';

>>>>>>> 0952e754d4ffe893649e42a960505a246633e76f
export default new Vuex.Store({
   modules: {
      service,
      utill,
   },
<<<<<<< HEAD

=======
>>>>>>> 0952e754d4ffe893649e42a960505a246633e76f
   strict: debug,
});
