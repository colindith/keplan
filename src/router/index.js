import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Price from '@/components/Price'
import Config from '@/components/Config'
import Login from '@/components/Login'
import Signup from '@/components/Signup'

Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/price',
      name: 'Price',
      component: Price
    },
    {
      path: '/config',
      name: 'Config',
      component: Config
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/signup',
      name: 'Signup',
      component: Signup
    },
  ]
})
