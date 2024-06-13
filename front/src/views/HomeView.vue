<template>

<div class="container mx-auto pt-10">
  <div class="card card-side bg-base-100 shadow-md flex">
  <div class="size-45"><img src="./image 16.png" alt="Movie"/></div>
  <div class="card-body">
    <h2 class="card-title text-lg">Современные решения для изучения 1С</h2>
    
    <p>Наша команда создает проекты для обучения школьников основам работы в 1С.
      Удобный и гибкий графический интефейс понятно объяснит, как работать в 1С
    </p>
    <p>Сделайте обучение интересным! </p>
    <div class="card-actions justify-end">
  
  <p class="text-lg font-semibold">Чтобы получить доступ к материалам - авторизуйтесь</p>
      <a class="btn btn-accent" href="/login">Войти</a>
    </div>
  </div>
</div>
</div>
</template>

<script>
// @ is an alias to /src
//import HelloWorld from '@/components/HelloWorld.vue'
import { mapActions } from 'vuex';

export default {
  name: 'HomeView',
  data(){
    return {
      likes:0,
      text:'',
      name:''
    }
  },
  methods :{
    ...mapActions({
      updateLikes: 'user/updateLikes',
      getUserByUid: 'user/getUserByUid'
    }),
    // addLike(){
    //   this.likes+=1
    //   if (this.uid){
    //     this.updateLikes({likes: this.likes})
    //   }
    // },
    // addDislike(){
    //   this.likes-=1
    // },
  },
  // watch:{
  //   likes(){
  //     if (this.likes<0){
  //       this.likes=0
  //     }
  //   }
  // },
  // async mounted() {
  //   this.uid = localStorage.getItem('uid')
  //   if(this.uid) {
  //     await this.getUserByUid()
  //     this.likes = this.$store.state.user.user?.likes || 0
  //     this.name = this.$store.state.user.user?.name
  //     this.text = `Вы авторизованы как ${this.name}, количество лайков:${this.likes}`

  //   } else{
  //     this.text = 'You are not authorized'
  //   }


  // },
  // components: {
    
  // }
}
</script>
<style>
.window{
  display: flex;
  flex-direction: column;
  margin: auto;
  width: 50vw;
  height: 300px;
  background-color: #42b983;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  row-gap: 15px;
}
.window-label {
  font-size: 1.5 rem;
}
.btns{
  display: flex;
  flex-direction: row;
  column-gap: 15px;
  justify-content: center;
}
.btn{
  padding:10 px;
  cursor: pointer;
  background-color: white;
  border-radius: 10px;
}
</style>