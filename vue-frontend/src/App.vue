<template>
  <div id="app">
    <div class="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-white border-bottom shadow-sm">
      <h5 class="my-0 mr-md-auto font-weight-normal"><router-link to="/" tag="a"  class="p-2 text-dark"><img style="height: 35px;" src="./assets/logo.png" alt=""></router-link></h5>
      <nav v-if="isLoggedIn" class="my-2 my-md-0 mr-md-3">
        <router-link to="/data-page" tag="a"  class="p-2 text-dark">Data Page</router-link>
        <v-facebook-login @logout="loggedOut" app-id="760486964486622"></v-facebook-login>
      </nav>
    </div>
    
    <div class="pricing-header px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center">
      <router-view/>
    </div>

      <footer class="pt-4 my-md-5 pt-md-5 border-top"></footer>
  </div>
</template>

<script>
    import VFacebookLogin   from 'vue-facebook-login-component'
    export default {
      name: 'App',

      components: {
          VFacebookLogin
      },
      
      data(){
        return {
          status: 1,
          user: '',
          isLoggedIn: false
        }
      },

      created(){
        this.checkLogin();

        Event.$on('login', (data) => {
            this.status = data.status;
            this.msg = data.msg;
            this.user = data.user;
            this.isLoggedIn = true;
            token = data.user.api_token;
            alert("Loggin success!");
            if(data.user.permission == 1)
              router.push({ path: "/data-page" })
            else
              router.push({ path: "/contact-admin" })
        }),
        Event.$on('logout', (data) => {
            this.status = data.status;
            this.msg = data.msg;
            this.user = '';
            this.isLoggedIn = false;
            localStorage.removeItem('token');
            alert("You are logged out!");
            router.push({ path: "/" })
        })
      },
      mounted(){
        console.log('mouted...');
      },
      methods: {
        checkLogin(){
          console.log(token);
          if (!token) {
            this.$router.push({path: '/'});
          }
        },
        loggedOut(){
            router.push({ path: "/logout" })
        }
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
  margin: auto;
}
.v-facebook-login{
  margin: auto;
}
</style>
