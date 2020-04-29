<template>
    <section class="content">
        <p>Xin chào,</p>
        <p>Bạn chưa có quyền truy cập vào trang data page.<p>
        <p>Vui lòng liên hệ admin để biết thêm chi tiết.</p>
    </section>
</template>

<script>
    import axios            from 'axios'
    import router           from '../router'

    export default {
        created(){
            let token = localStorage.getItem('token')
        }
    }
</script>