import Vue from 'vue'
import App from './App.vue'
import store from './store'
import Home from './components/Home.vue'
import RouteTester from './components/RouteTester.vue'
import GraphData from './components/GraphData.vue'

import VueRouter from 'vue-router'

Vue.use(VueRouter)
Vue.config.productionTip = false



// insert path here
const routes = [
  {path: '/', name: 'Home', component: Home },
  {path: '/components/RouteTester.vue', name: 'RouteT', component: RouteTester},
  {path: '/components/GraphData.vue', name: 'GraphD', component: GraphData}
]
const router = new VueRouter({
  routes
})

new Vue({
   render: h => h(App),
   store,
   router
}).$mount('#app')
