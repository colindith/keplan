// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import './assets/css/bootstrap.css'
import './assets/css/style.css'
import './assets/css/font-awesome.css'
import './assets/css/SidebarNav.min.css'
import './assets/js/jquery-1.11.1.min.js'
// import './assets/js/modernizr.custom.js'
// // import 'http://fonts.googleapis.com/css?family=PT+Sans:400,400i,700,700i&amp;subset=cyrillic,cyrillic-ext,latin-ext'
import './assets/js/metisMenu.min.js'
import './assets/js/custom.js'
import './assets/css/custom.css'
import VueResource from 'vue-resource';

Vue.config.productionTip = false
Vue.use(VueResource);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
