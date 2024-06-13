<template>
  <div class="container mx-auto pt-10" v-show="value2">
  <div class="card card-side bg-base-100 shadow-md flex">
  <div class="card-body">
    <h2 class="card-title text-lg">Права доступа ограничены</h2>
    
    <p>Если вы - администратор, зайдите под рабочей учетной записью
    </p>
    <div class="card-actions justify-end">
      <a class="btn btn-accent" href="/login">Войти</a>
    </div>
  </div>
</div>
</div>
  <div class="about" v-show="value1">
    <PostCreate @submit.prevent="goaddEvent()"/>
    <PostList/>
    <PostItem v-for="event in events" :key="event.id" :event="event" />
    <div v-show="value1"></div>
    <!-- <PostList :posts="posts" />  -->
  </div>
</template>

<script>
import { mapActions, mapState, mapGetters } from 'vuex';
import PostItem from '@/components/PostItem.vue';
import PostCreate from '@/components/PostCreate.vue';
import PostList from '@/components/PostList.vue';
// import event from '@/store/event';

export default {
  name: 'about',
  data() {
    return {
      showAddEventForm: false,
      value1: false,
      value2: true
    };
  },  
  computed:{
    ...mapState({
      events: 'event/events'
    }),
    ...mapGetters({
      user: 'user/user',
      eventsData:'event/events'
    }),
    user(){
      return this.$store.state.user.user;
    },
    events(){
      return this.$store.state.event.events;
    },
  },
  methods: {
    ...mapActions({
      getUserByUid: 'user/getUserByUid',
      getAllEvents: 'event/getallevents'
    }),
    // createPost(post) {
    //   this.posts.unshift(post)
    // }
    async goaddEvent() {
      try {
        await this.addevent(this.formData);
        await this.getAllEvents(); // Обновляем список мероприятий после добавления
        this.$emit('close-form'); // Эмитируем событие для закрытия формы
      } catch (error) {
        console.error('Error adding event:', error);
      }
    }
  },
  async mounted(){
    this.uid = localStorage.getItem('uid')
    if (this.uid == '1ec8ef79-aac5-4340-8396-3078922a82c7'){
      this.value1 = true,
      this.value2 = false
      
    }

  },
  async beforeMount() {
    this.getUserByUid();
    this.getAllEvents();
  },
  // mounted(){
  //   this.getUserByUid()

  // },
  components: {
    PostItem,
    PostCreate,
    PostList
  }
}
</script>