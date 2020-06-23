import Vue from 'vue'
import App from './App.vue'
import BootstrapVue from 'bootstrap-vue' // added
//import Router from 'vue-router'
//import HelloWorld from '@/components/HelloWorld'

import 'bootstrap/dist/css/bootstrap.css' // added
import 'bootstrap-vue/dist/bootstrap-vue.css' // added

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')

//Vue.use(Router)
Vue.use(BootstrapVue) // added