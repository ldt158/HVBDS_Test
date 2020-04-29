
<template>
	<div>
		<h1>You are logged out!</h1>
	</div>
</template>

<script>
    export default {
        created() {
            console.log('di den trang logout');
			if(!token) {
				return false;
			}
			axios.get("http://localhost:3000/logout/"+token)
			.then(res => {
                localStorage.removeItem('token');
                Event.$emit('logout',res.data);
            });
        }
    }
</script>