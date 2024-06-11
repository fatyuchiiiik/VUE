<template>
    <div class="container mx-auto pt-10">
  <div class="card card-side bg-base-100 shadow-md flex">

  <div class="card-body">
    <h2 class="card-title text-xl">
        {{ title }}
    </h2>
    <p class="text-lg font-semibold">
        {{ body }}
    </p>
    <div class="btns">
        <button class="btn like":class="{'liked': isLiked}" @click="toggleLike">
          <img src="@/assets/likes.png" alt="" width="20px">
          <div>
        {{ likes }}
      </div>
      </button>
    </div>
    </div>
</div>
</div>
    
</template>

<script>
import { mapActions } from 'vuex'

export default {
    name: 'PostItem',
    data(){
        return{
            isLiked: false,
        }
    },
    props:{
    event:{
        type:Object,
        required:true
    }
    },
    // props: {
    //     title: {
    //         type: String,
    //         required: true
    //     },
    //     body: {
    //         type: String,
    //         required: true
    //     }
    // }, 
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
            await this.$store.dispatch('user/addToFavorites, this.event');
        }catch(error){
            this.isLiked = !this.isLiked;
            console.error('Ошибка при удалении/добавлении избранного: ', error);

        }
    },
    },
    watch:{
        // likes(){
        //     if(this.likes < 0){
        //         this.likes = 0
        //     }
        // }
      
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
<!-- 
<style>
    .post-info {
        display: flex;
        flex-direction: column;
        background-color: #42b983;
        border-radius: 10px;
        padding: 10px 5px;
        margin: 10px;
        justify-content: flex-start;
        align-items: flex-start;
        position: relative;
    }
    .title {
        font-size: 1.3rem;
    }
    .body {
        font-size: 0.9rem;
    }
</style> -->