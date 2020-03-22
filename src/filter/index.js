import Vue from 'vue'
import moment from 'moment'

Vue.filter('dateFormat', function (value, formatStr) {
  return moment(value).format(formatStr)
})
