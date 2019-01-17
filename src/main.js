import '@babel/polyfill'
import Vue from 'vue'
import './plugins/bootstrap-vue'
import VueCarousel from 'vue-carousel'
import App from './App.vue'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'animate.css'
import {library} from '@fortawesome/fontawesome-svg-core'
import {faMapMarkerAlt, faPhone, faCircle, faArrowDown} from '@fortawesome/free-solid-svg-icons'
import {faFacebook, faInstagram} from '@fortawesome/free-brands-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome'

var Data = Object.freeze({
	name: 'Site Soma',
	projects: [
		{name: 'teste'},
		{name: 'teste2'}
	]
});


library.add(faFacebook)
library.add(faInstagram)
library.add(faMapMarkerAlt, faPhone, faCircle, faArrowDown)
Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.use(VueCarousel)

Vue.config.productionTip = false
Vue.prototype.$appData = Data;

new Vue({
  render: h => h(App)
}).$mount('#app')
