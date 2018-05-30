import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import Home from './Home.vue'
import User from './Users.vue'

Vue.use(VueRouter)

const routes = [
  { path: '/users/:teamId', component: User },
  { path: '/', component: Home }
];

const router = new VueRouter({
  routes: routes,
  mode: 'history'
})

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
