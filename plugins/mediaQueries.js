import Vue from 'vue'
import VueMq from 'vue-mq'

export const breakpoints = {
                      xs: 540,
                      sm: 768,
                      md: 980,
                      lg: 1150,
                      xl: 1400,
                      xxl: Infinity
                    };

export const breakpointArray = Object.keys(breakpoints);

export function getBreakpointByName(name) {
  const nameIndex = breakpointArray.indexOf(name);
  return breakpoints[name] === Infinity ? breakpoints[breakpointArray[nameIndex - 1]] : breakpoints[name]
}

Vue.use(VueMq, {
  breakpoints
})

