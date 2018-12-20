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

export function getBreakpointByName(name) {
  const nameIndex = breakpointArray.indexOf(name);
  return breakpoints[name] === Infinity ? breakpoints[breakpointArray[nameIndex - 1]] : breakpoints[name]
}

Vue.use(VueMq, {
  breakpoints
})

