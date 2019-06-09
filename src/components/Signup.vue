<template>
  <div id="page-wrapper">
    <div class="main-page signup-page">
      <h2 class="title1">SignUp Here</h2>
      <div class="sign-up-row widget-shadow">
        <h5>Personal Information :</h5>
        <form onsubmit="return false;" oninput='password_comfirm.setCustomValidity(password_comfirm.value != password.value ? "Passwords do not match." : "")'>
        <div class="sign-u">
              <input type="text" name="username" placeholder="Userame" required="" v-model="username">
          <div class="clearfix"> </div>
        </div>
        <!-- <div class="sign-u">
              <input type="text" placeholder="Nick Name" required="" v-model="nickname">
          <div class="clearfix"> </div>
        </div> -->
        <div class="sign-u">
              <input type="email" placeholder="Email Address" required="" v-model="email">
          <div class="clearfix"> </div>
        </div>
        <div class="sign-u">
          <div class="sign-up1">
            <h4>Gender* :</h4>
          </div>
          <div class="sign-up2">
            <label>
              <input type="radio" name="Gender" required="" value=1 v-model="gender">
              Male
            </label>
            <label>
              <input type="radio" name="Gender" required="" value=0 v-model="gender">
              Female
            </label>
          </div>
          <div class="clearfix"> </div>
        </div>
        <h6>Login Information :</h6>
        <div class="sign-u">
              <input type="password" name="password" placeholder="Password" required="" v-model="password">
          <div class="clearfix"> </div>
        </div>
        <div class="sign-u">
              <input type="password" name="password_comfirm" placeholder="Confirm Password" required="" v-model="comfirm">
          </div>
          <div class="clearfix"> </div>
        <div class="sub_home">
          <input type="submit" value="Submit" @click="submitSignup">
          <div class="clearfix"> </div>
        </div>
        <div class="registration">
          Already Registered.
          <router-link to="/login">Login </router-link>
        </div>
      </form>
      </div>
    </div>
  </div>
</template>

<script>
import url from '../service/url.js'
import { mapMutations, mapState } from 'vuex'
import { getSnack } from '@/stores/SnackBar'
export default {
  data() {
    return {
      username: '',
      password: '',
      gender: '',
      email: '',
      comfirm: '',
      ajaxRequest: false,
      postResults: [],
      snackClass: {
        show: false,
      },
      snackName: '',
    };
  },
  computed: mapState({
    storeSnack: state => state.snack
  }),
  methods: {
    submitSignup: function() {
      // validator
      // TODO: use bootstrap validator instead
      if (this.password !== this.comfirm){
        return
      }
      if (this.username === "" || this.password === "" || this.email === "" || 
          this.gender === "") {
        return
      }
      this.ajaxRequest = true;
      this.$http.post(url.auth_service.signup, {
        username: this.username,
        email: this.email,
        gender: this.gender,
        password: this.password,
      }, {
        "headers": {"content-type": "application/json"}
      }, function (data, status, request) {
          this.postResults = data;
          this.ajaxRequest = false;
      });
      console.log("in end of signup function")
      this.snackTime("Registration Success!");
      this.$router.push("home");
    },
    snackTime: function (snack) {
      console.log("in snack time")
      this.setSnack(snack)
      // this.$router.push('/')
    },
    ...mapMutations({
      setSnack: 'setSnack'
    })
  }
}
</script>

<style scoped>
#snackbar {
  visibility: hidden; /* Hidden by default. Visible on click */
  min-width: 250px; /* Set a default minimum width */
  margin-left: -125px; /* Divide value of min-width by 2 */
  background-color: #333; /* Black background color */
  color: #fff; /* White text color */
  text-align: center; /* Centered text */
  border-radius: 2px; /* Rounded borders */
  padding: 16px; /* Padding */
  position: fixed; /* Sit on top of the screen */
  z-index: 1; /* Add a z-index if needed */
  left: 50%; /* Center the snackbar */
  top: 30px; /* 30px from the bottom */
}

/* Show the snackbar when clicking on a button (class added with JavaScript) */
#snackbar.show {
  visibility: visible; /* Show the snackbar */
  /* Add animation: Take 0.5 seconds to fade in and out the snackbar. 
  However, delay the fade out process for 2.5 seconds */
  -webkit-animation: fadein 0.5s, fadeout 0.5s 2.5s;
  animation: fadein 0.5s, fadeout 0.5s 2.5s;
}

/* Animations to fade the snackbar in and out */
@-webkit-keyframes fadein {
  from {top: 0; opacity: 0;} 
  to {top: 30px; opacity: 1;}
}

@keyframes fadein {
  from {top: 0; opacity: 0;}
  to {top: 30px; opacity: 1;}
}

@-webkit-keyframes fadeout {
  from {top: 30px; opacity: 1;} 
  to {top: 0; opacity: 0;}
}

@keyframes fadeout {
  from {top: 30px; opacity: 1;}
  to {top: 0; opacity: 0;}
}
</style>