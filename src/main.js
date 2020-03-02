import Vue from 'vue'
import App from './App.vue'
import FastClick from 'fastclick'
import router from './router'

FastClick.attach(document.body)
// eslint-disable-next-line no-new
new Vue({
  el: '#app',
  render: h => h(App),
  router
})
