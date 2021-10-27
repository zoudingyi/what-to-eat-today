import Vue from 'vue';
import App from './App.vue';
import 'normalize.css/normalize.css';
import '@/utils/registerElementUI.js';

import '@/styles/index.scss'; // global css

Vue.config.productionTip = false;

new Vue({
  render: h => h(App)
}).$mount('#app');
