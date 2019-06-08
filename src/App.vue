<template>
  <div id="app">
    <SideNavigation />
    <!-- <Navigation />
    <Friends />
    <FooterComponent /> -->
    <!-- <router-link to="account">Account</router-link> -->
    <router-view/>
  </div>
</template>

<script>
import SideNavigation from './components/SideNavigation'
// import Navigation from './components/Navigation'
// import Friends from './components/Friends'
// import FooterComponent from './components/Footer'
// import Account from './components/Account'
import Price from './components/Price'
import Config from './components/Config'
import Login from './components/Login'

export default {
  name: 'app',
  components: {
    // Navigation,
    // Friends,
    // FooterComponent,
    SideNavigation,
    Price,
    Login,
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
body {
  margin: 0;
}
</style>
