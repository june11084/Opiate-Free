import Vue from 'vue'
import App from './App.vue'
import store from './store'
import HelloWorld from './components/HelloWorld.vue'
import RouteTester from './components/RouteTester.vue'
import GraphData from './components/GraphData.vue'

import VueRouter from 'vue-router'

Vue.use(VueRouter)
Vue.config.productionTip = false



// insert path here
const routes = [
  {path: '/', name: 'HelloWorld', component: HelloWorld },
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
