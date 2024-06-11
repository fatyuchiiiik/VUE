<template>
  <div class="navbar bg-base-100">
  <div class="navbar-start">
    <div class="dropdown">
      <div tabindex="0" role="button" class="btn btn-ghost btn-circle">
        <svg xmlns="C:\Users\admin\Desktop\Кудреватых\VUE22\VUE\front\src\views\image 16.png" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
      </div>
      <ul tabindex="0" class="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        <li><a href="/">Главная</a></li>
        <li><a href="/about">Новости</a></li>
        <li><a href="/profile">Личный кабинет</a></li>
        <li><a href="/register">Регистрация</a></li>
      </ul>
    </div>
  </div>
  <div class="navbar-center">
    <a class="btn btn-ghost text-lg" href="/">Проектные решения 1С</a>
  </div>
  <div class="navbar-end">
    <a class="btn" @click="logout()" href="/login">выйти</a>
  </div>
</div>
<router-view/>

</template>
<script>
import { mapActions, mapState } from 'vuex'
import store from './store';

export default {
  methods: {
    ...mapActions({
      logout: 'auth/logout'
    })
  },
  mounted() {
    const uid = localStorage.getItem('uid')
    uid ? this.$store.commit('auth/setAuth', true) : this.$store.commit('auth/setAuth', false)
  },
  computed: {
    ...mapState({
      isAuth: state => state.auth.isAuth
    })
  }
}
</script>

<style>
  @import './output.css';
  @font-face {
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 60;
  /* Браузер сначала попробует найти шрифт локально */
  src: local("Montserrat-Medium"),
       /* Если не получилось, загрузит woff2 */
       url("./fonts/Montserrat-Medium.ttf") format("ttf"),
       /* Если браузер не поддерживает woff2, загрузит woff */
      /* url("/fonts/montserrat.woff") format("woff");*/
}
body {
  font-family: "Montserrat", sans-serif;
}
</style>
