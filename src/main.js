import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueSweetalert2 from 'vue-sweetalert2'
import VueHtmlToPaper from 'vue-html-to-paper'
import 'sweetalert2/dist/sweetalert2.min.css'
import Vuelidate from 'vuelidate'
import jQuery from 'jquery'
import 'popper.js'
import 'bootstrap'
import './assets/app.scss'
import { store } from './store/index'

const options = {
  styles: [
    'https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css'
  ]
}
window.$ = window.jQuery = jQuery
Vue.use(Vuelidate)
Vue.use(VueSweetalert2)
Vue.use(VueHtmlToPaper, options)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
