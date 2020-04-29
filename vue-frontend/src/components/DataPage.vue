<template>
    <section v-if="status" class="content">
        <h1>Data page</h1>
    </section>
</template>

<script>
    export default {
        data() {
            return {
                status: 0
            }
        },
        created(){
            axios
                .post('http://localhost:3000/', {api_token: token} )
                .then(res => {
                    if(res.data.user.permission != 1){
                        alert("You don't have permission on this page");
                        router.push({ path: "/contact-admin" })
                    }
                    this.status = 1;

                })
                .catch(err => console.log(err))
        }
    }
</script>