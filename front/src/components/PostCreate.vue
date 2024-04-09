<template>
    <div>
        <form class="main-form" @submit.prevent>
            <input type="text" placeholder="Введите название" class="input-form title" v-model="title">
            <input type="text" placeholder="Введите содержимое" class="input-form body" v-model="body">
            <button class="create-post" @click="createPost()">Создать пост</button>
        </form>
    </div>
  </template>
  
  <script>
    export default {
        data() {
            return {
                title: '',
                body: ''
            }
        },
        methods: {
            createPost() {
                const post = {
                    title: this.title,
                    body: this.body
                }
                this.$emit('create', post)
            }
        }
    }
  </script>
  
  <style>
    .main-form {
        display: flex;
        flex-direction: column;
        margin: auto;
        width: 40%;
    }
    .input-form {
        display: flex;
        flex-direction: column;
        width: 20vw;
        margin: 10px auto 10px auto;
        border: 2px solid #42b983;
        border-radius: 10px;
    }
    .title {
        height: 4vh;
    }
    .body {
        height: 8vh;
    }
    .create-post {
        width: 20.5vw;
        height: 5vh;
        font-size: 1.5rem;
        border: 2px solid #42b983;
        border-radius: 10px;
        margin: 5px auto 5vh auto;
        background-color: #fff;
    }
    .create-post:hover {
        background-color: #42b893;
    }
  </style>