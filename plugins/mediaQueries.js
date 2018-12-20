import Vue from 'vue'
import VueMq from 'vue-mq'

Vue.use(VueMq, {
  breakpoints: {
    xs: 400,
    sm: 650,
    md: 900,
    lg: 1150,
    xl: Infinity
  }
})