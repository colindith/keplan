import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
// import Account from '@/components/Account'
// import Contact from '@/components/Contact'
// import Friends from '@/components/Friends'
import Price from '@/components/Price'
import Config from '@/components/Config'
import Login from '@/components/Login'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    // {
    //   path: '/friends/:id/:age/:weight',
    //   name: 'Friends',
    //   props: true,
    //   component: Friends
    // },
    // {
    //   path: '/contact',
    //   name: 'Contact',
    //   component: Contact
    // },
    // {
    //   path: '/account',
    //   name: 'Account',
    //   component: Account
    // },
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
  ]
})