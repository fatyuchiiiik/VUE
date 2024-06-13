<template>
    <div class="about">
      <PostCreate @submit.prevent="goaddEvent()"/>
      <PostList/>
      <PostItem v-for="event in events" :key="event.id" :event="event" />
      <!-- <PostList :posts="posts" />  -->
    </div>
  </template>
  
  <script>
  import { mapActions, mapState, mapGetters } from 'vuex';
  import PostItem from '@/components/PostItem.vue';
  import PostCreate from '@/components/PostCreate.vue';
  import PostList from '@/components/PostList.vue';
import auth from '@/store/auth';
  // import event from '@/store/event';
  
  export default {
    name: 'about',
    data() {
      return {
        showAddEventForm: false,
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
    async beforeMount() {
      this.getUserByUid();
      this.getAllEvents();
    },
    // mounted(){
    //   this.getUserByUid()
  
    // },
    components: {
      PostItem,
    //   PostCreate,
      PostList
    }
  }
  </script>