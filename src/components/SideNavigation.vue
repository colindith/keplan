<template>
  <div>
    <div ref="sidenav" class="sidenav">
    <a href="javascript:void(0)" class="closebtn" v-on:click="closeNav()">&times;</a>
    <a href="#">About</a>
    <a href="#">Services</a>
    <a href="#">Clients</a>
    <a href="#">Contact</a>
    </div>
    
    <div class="topnav">
      <a v-on:click="openNav">&#9776;</a>
      <router-link to="/home" active-class="active">Home </router-link>
      <router-link to="/price" active-class="active">Price </router-link>
      <router-link to="/config" active-class="active">Config </router-link>
      <!-- <a href="#news">News</a>
      <a href="#contact">Contact</a> -->
      <div class="topnav-right">
        <a href="#search">Search</a>
        <a href="#about">About</a>
      </div>
    </div>
  </div>
</template>

<script>
// import FriendStore from "../stores/FriendStore"

export default {
  // data() {
  //   return {
  //     FriendStore: FriendStore.data
  //   };
  // },
  methods: {
    /* Set the width of the side navigation to 250px and the left margin of the page content to 250px */
    openNav() {
      this.$refs.sidenav.style.width = "250px";
      this.$refs.sidebar.style.width = "0";
      // document.getElementById("mySidenav").style.width = "250px";
      // document.getElementById("main").style.marginLeft = "250px";
    },

    /* Set the width of the side navigation to 0 and the left margin of the page content to 0 */
    closeNav() {
      this.$refs.sidenav.style.width = "0";
      this.$refs.sidebar.style.width = "30";
      // document.getElementById("mySidenav").style.width = "0";
      // document.getElementById("main").style.marginLeft = "0";
    }
  }
}

</script>

<style scoped>
/* Side Nav */
/* The side navigation menu */
.sidenav {
  height: 100%; /* 100% Full-height */
  width: 0; /* 0 width - change this with JavaScript */
  position: fixed; /* Stay in place */
  z-index: 1; /* Stay on top */
  top: 0; /* Stay at the top */
  left: 0;
  background-color: #111; /* Black*/
  overflow-x: hidden; /* Disable horizontal scroll */
  padding-top: 60px; /* Place content 60px from the top */
  transition: 0.5s; /* 0.5 second transition effect to slide in the sidenav */
}

/* The navigation menu links */
.sidenav a {
  padding: 8px 8px 8px 32px;
  text-decoration: none;
  font-size: 25px;
  color: #818181;
  display: block;
  transition: 0.3s;
}

/* When you mouse over the navigation links, change their color */
.sidenav a:hover {
  color: #f1f1f1;
}

/* Position and style the close button (top right corner) */
.sidenav .closebtn {
  position: absolute;
  top: 0;
  right: 25px;
  font-size: 36px;
  margin-left: 50px;
}

/* Style page content - use this if you want to push the page content to the right when you open the side navigation */
#main {
  transition: margin-left .5s;
  padding: 20px;
}

/* On smaller screens, where height is less than 450px, change the style of the sidenav (less padding and a smaller font size) */
@media screen and (max-height: 450px) {
  .sidenav {padding-top: 15px;}
  .sidenav a {font-size: 18px;}
}

/* Top Nav Bar */
/* Add a black background color to the top navigation */
.topnav {
    background-color: #333;
    overflow: hidden;
}

/* Style the links inside the navigation bar */
.topnav a {
  float: left;
  color: #f2f2f2;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
  font-size: 17px;
}

/* Change the color of links on hover */
.topnav a:hover {
  background-color: #ddd;
  color: black;
}

/* Add a color to the active/current link */
.topnav a.active {
  background-color: #4CAF50;
  color: white;
}

/* Right-aligned section inside the top navigation */
.topnav-right {
  float: right;
}
</style>