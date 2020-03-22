import Vue from 'vue'
import App from './App.vue'
import FastClick from 'fastclick'
import router from './router'
import store from './store'
import {Button} from 'mint-ui'
// import VueLazyLoad from 'vue-lazyload'
import './filter'
import './mock/mockServer'
// import loading from 'pages/MSite/images/nav/12.jpg'
//
// Vue.use(VueLazyLoad, {
//   loading
// })

Vue.component(Button.name, Button) // <mt-button>
FastClick.attach(document.body)
// eslint-disable-next-line no-new
new Vue({
  el: '#app',
  render: h => h(App),
  router,
  store
})
