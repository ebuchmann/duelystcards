/* global SimpleScrollbar */

import Vue from 'vue';

require('simple-scrollbar');

Vue.directive('scroll', {
  inserted: (el) => {
    SimpleScrollbar.initEl(el);
  },
});
