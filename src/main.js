import Vue from 'vue'
import VueRouter from 'vue-router'
import App from "../src/components/Root/App"
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import store from "./store"
import {router} from "./components/Root/router"



Vue.use(BootstrapVue,IconsPlugin,VueRouter)
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  store,
  router
}).$mount('#app')


