<template>
    <div class="home">
        <form @submit.prevent="goRegister">
            <h2 class="card-title">Регистрация</h2>
            <label class="input input-bordered flex items-center gap-2">
               Email <input type="text" class="grow"  v-model="email"/>
            </label>
            <label class="input input-bordered flex items-center gap-2">
               Password <input type="password" class="grow"  v-model="password"/>
            </label>
            <label class="input input-bordered flex items-center gap-2">
               Name <input type="text" class="grow"  v-model="name"/>
            </label>
            <button type="submit" class="btn btn-accent">зарегистрироваться</button>
            <span>уже есть аккаунт?  <a class="link link-accent" href="/login">войдите</a></span>
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
    methods: {
        ...mapActions({
            register: 'auth/register'
        }
    ),
        goRegister(){
            const formData = {
                email: this.email,
                password: this.password,
                name: this.name
            }
            this.register(formData)
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