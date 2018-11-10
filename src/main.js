import Vue from 'vue'
import App from './App.vue'
import store from './store'
import HelloWorld from './components/HelloWorld.vue'
// import GoogleMaps from './components/googleMaps.vue'

Vue.config.productionTip = false

new Vue({
   render: h => h(App),
   store
}).$mount('#app')
