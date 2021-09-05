import Vue from 'vue'
import VueRouter from 'vue-router'

import App from './App.vue'
import Index from './components/BookList.vue'

import Axios from 'axios'
Axios.defaults.baseURL = process.env.VUE_APP_API_ENDPOINT;

Vue.use(VueRouter)

Vue.config.productionTip = false

const routes = [
  {
    name: 'Index',
    path: '/',
    component: Index
  },
];

const router = new VueRouter({ mode: 'history', routes: routes })

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
