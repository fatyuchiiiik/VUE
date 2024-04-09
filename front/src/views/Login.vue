<template>
    <div class="home">
        <form @submit.prevent="go_login">
            <h2 class="card-title">Авторизация</h2>
            <label class="input input-bordered flex items-center gap-2">
               Email <input type="text" class="grow"  v-model="email"/>
            </label>
            <label class="input input-bordered flex items-center gap-2">
               Password <input type="password" class="grow"  v-model="password"/>
            </label>
            <button type="submit" class="btn btn-accent">войти</button>
            <span>нет аккаунта?  <a class="link link-accent" href="/register">зарегистрируйтесь</a></span>
        </form>
    </div>
</template>

<script>
import { mapActions } from 'vuex';
export default {
    data() {
        return {
            email: '',
            password: '',
            name: ''
        }
    },
    methods:{
        ...mapActions({
            login:'auth/login'
        }),
        go_login(){
            const formData = {
                email: this.email,
                password: this.password
            }
            this.login(formData)
        }
    }
}
</script>
<style>

.home {
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100dvh;
}
form {
    display: flex;
    flex-direction: column;
    width: 400px;
    row-gap: 20px;
}

</style>