<template>
    <section class="content">
        <h1>Facebook Login</h1>
        <v-facebook-login @login="loggedIn" app-id="760486964486622"></v-facebook-login>
    </section>
</template>

<script>
    import VFacebookLogin   from 'vue-facebook-login-component'

    export default {
      components: {
          VFacebookLogin
      },
        methods: {
            loggedIn: (res) => {
                const uID = res.authResponse.userID
                if(uID){
                    axios
                        .post('http://localhost:3000/login', {userID: uID} )
                        .then(res => {
                            Event.$emit('login',res.data);
                        })
                        .catch(err => console.log(err))
                }
            }
        }
    }
</script>