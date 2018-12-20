import Vue from 'vue'
import VueMq from 'vue-mq'

export const breakpoints = {
                      xs: 400,
                      sm: 650,
                      md: 900,
                      lg: 1150,
                      xl: Infinity
                    };

export const breakpointArray = Object.keys(breakpoints);

Vue.use(VueMq, {
  breakpoints
})

