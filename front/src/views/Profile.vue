<template lang="">
  <div class="container mx-auto pt-10">
    <div class="card w-96 bg-base-100 shadow-xl">
      <div class="card-body">
      <p>{{ text }}</p>  

      </div>  
    </div>
  </div>
</template>
<script>
import { mapActions, mapGetters, mapState } from 'vuex';
import PostItem from '@/components/PostItem.vue';
export default {
  name: 'Profile',
  components:{
    PostItem,
  },
    data() {
        return {
            showAddEventForm: false,        
          }
    },
    computed:{
      ...mapState('user',[
        'user',
        'favoriteEvents'
      ]),
      user(){
        return this.$store.state.user.user;
      },
      events(){
        return this.$store.state.event.events;

      }
    },
    methods :{
    ...mapActions('user',[
      'getUserByUid',
      'getFavoriteEvents'
    ])
  },
  beforeMount(){
    this.getUserByUid();
    this.getFavoriteEvents();
  },
    async mounted() {
    this.uid = localStorage.getItem('uid')
    if(this.uid) {
      await this.getUserByUid()
      this.name = this.$store.state.user.user?.name
      this.text = `Вы авторизованы как ${this.name}`

    } else{
      this.text = 'Вы не авторизованы';
    }
  }
}
</script>
<style lang="">
    
</style>