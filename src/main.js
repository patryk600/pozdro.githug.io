import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueYoutube from 'vue-youtube'
import './../node_modules/bulma/css/bulma.css';
import "./assets/scss/main.scss"
// import { mdiYoutube } from '@mdi/js';

Vue.config.productionTip = false;
Vue.use(VueYoutube);
new Vue({
  router,
  render: h => h(App)
}).$mount('#app');
