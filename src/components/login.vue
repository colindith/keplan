<template>
  <div id="page-wrapper">
    <div class="main-page login-page ">
      <h2 class="title1">Login</h2>
      <div class="widget-shadow">
        <div class="login-body">
          <form action="#" method="post">
            <input type="text" class="user" name="username" placeholder="Enter Your Username" required="" v-model="username">
            <input type="password" name="password" class="lock" placeholder="Password" required="" v-model="password">
            <div class="forgot-grid">
              <label class="checkbox"><input type="checkbox" name="checkbox" checked=""><i></i>Remember me</label>
              <div class="forgot">
                <a href="#">forgot password?</a>
              </div>
              <div class="clearfix"> </div>
            </div>
            <a href="#" class="btn btn-success" @click="submitEntry">Submit</a>
            <input type="submit" name="Sign In" value="Sign In">
            <div class="registration">
              Don't have an account ?
              <a class="" href="signup.html">
                Create an account
              </a>
            </div>
          </form>
        </div>
      </div>
      
    </div>
  </div>
</template>

<script>
import url from '../service/url.js'
console.log("url.auth_service.login", url.auth_service.login)
export default {
  data() {
    return {
      username: '',
      password: '',
      ajaxRequest: false,
      postResults: []
    };
  },
  methods: {
    submitEntry: function() {
      this.ajaxRequest = true;
      this.$http.post(url.auth_service.login, {
        username: this.username,
        password: this.password,
      }, {
        "headers": {"content-type": "application/json"}
      }, function (data, status, request) {
          this.postResults = data;
          this.ajaxRequest = false;
      });
    }
  }
}
</script>

<style scoped>
</style>