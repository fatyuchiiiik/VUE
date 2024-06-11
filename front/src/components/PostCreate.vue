<template>
      <div class="container mx-auto pt-25">
        <form class="main-form mx-auto" @submit.prevent="goaddEvent()">
            <input type="text" placeholder="Введите название" class="input input-bordered w-full max-w-xs" v-model="title"/>
            <textarea class="textarea textarea-bordered" placeholder="Введите содержимое" v-model="bodyText"></textarea>
            <!-- <button class="btn btn-secondary" @click="goaddEvent()">Создать пост</button> -->
            <button class="btn btn-secondary" type="submit">Создать пост</button>
        </form>
    </div>
  </template>
  
  <script>
  import { mapActions } from 'vuex'

    export default {
        name: 'addEvents',
        data() {
            return {
                title: '',
                bodyText: '',
                likes: 0
            }
        },
        methods: {
            ...mapActions({
                addevent: 'event/addevent',
                getallevents: 'event/getallevents'
            }),
    //         addEvents(events) {
    //             const promises = events.map(event => this.addevent(event));
    //             Promise.all(promises)
    //                .then(() => {
    //       window.alert('Данные успешно извлечены из файла');
    //       this.getallevents();
    //     })
    //     .catch(error => {
    //       console.error('Ошибка при добавлении мероприятий из файла:', error);
    //     });
    // },
    goaddEvent() {
      const formData = {
        title: this.title,
        bodyText: this.bodyText,
        likes: this.likes
      };
      this.addevent(formData)
        .then(() => {
          window.alert('Новость опубликована');
          this.getallevents();
        })
        .catch(error => {
          console.error('Ошибка при добавлении мероприятия:', error);
        });
    }
        }
    }
  </script>
  
  <!-- <style>
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
  </style> -->