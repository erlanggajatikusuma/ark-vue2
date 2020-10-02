import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueSweetalert2 from 'vue-sweetalert2'
import 'sweetalert2/dist/sweetalert2.min.css'
import Vuelidate from 'vuelidate'
import jQuery from 'jquery'
import 'popper.js'
import 'bootstrap'
import './assets/app.scss'
import { store } from './store/index'
window.$ = window.jQuery = jQuery
Vue.use(Vuelidate)
Vue.use(VueSweetalert2)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
