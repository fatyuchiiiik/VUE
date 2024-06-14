<template>
  <div class="container mx-auto pt-10">
  <div class="max-w-md mx-auto bg-base-100 rounded-xl shadow-md overflow-hidden md:max-w-2xl pt-10">
  <div class="md:flex">
    <div class="md:shrink-0">
      <img class="h-48 w-full object-cover md:h-48 md:w-48" :src="event.imageUrl">
    </div>
    <div class="p-8">
      <p class="block mt-1 text-lg leading-tight font-medium text-black hover:underline">{{ event.title }}</p>
      <p class="mt-2 text-slate-500">{{ event.bodyText }}</p>
      <!-- <div class="btns"> -->
        <button class="btn" :class="{'liked': isLiked}" @click="toggleLike">
         <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
        </button>
  </div>
</div>
</div>
</div>
    <!-- <div class="container mx-auto pt-10">
  <div class="card card-side bg-base-100 shadow-md flex">
    <div class="size-45"><img :src="event.imageUrl" class="event-image"/></div>
  <div class="card-body">
    <h2 class="card-title text-2xl">
        {{ event.title }}
    </h2>
    <p class="text-lg font-semibold">
        {{ event.bodyText }}
    </p>
    <div class="btns">
        <button class="btn" :class="{'liked': isLiked}" @click="toggleLike">
  <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>
</button>
       
    </div>
    </div>
</div>
</div> -->
    
</template>

<script>
import { mapActions } from 'vuex'

export default {
    props:{
    event:{
        type:Object,
        required:true
    }
    },
    name: 'PostItem',
    data(){
        return{
            isLiked: false,  
    }
    },
    computed:{
        user(){
            return this.$store.state.user.user;
        },
        isFavorite(){
            return this.$store.state.user.favoriteEvents.some(event => event.uid === this.event.uid);
        },

    },
    methods: {
    // ...mapActions({
    //     updateLikes:'user/updateLikes', 
    //     getUserByUid:'user/getUserByUid'
    // }),
    //     addLike(){
    //   this.likes+=1
    //   if (this.uid){
    //     this.updateLikes({likes: this.likes})
    //   }
    // },
    async toggleLike(){
        try {
            this.isLiked = !this.isLiked;
            console.log('zkjf');
            await this.$store.dispatch('user/addToFavorites', this.event);
        }catch(error){
            this.isLiked = !this.isLiked;
            console.error('Ошибка при удалении/добавлении избранного: ', error);

        }
    },
    },
    watch:{
    isFavorite: {
      immediate: true,
      handler(newVal) {
        this.isLiked = newVal;
      } 
  },
  created() {
    this.$store.dispatch('user/getFavoriteEvents');
  },
   
}
}
</script>

<style>
    
    .btn.liked {
        background-color:  #f4978e; 
    }
</style>