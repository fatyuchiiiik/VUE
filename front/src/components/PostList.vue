<template>
    <div class="post-list">
        <div v-for="(event, index) in event" :key="id">
            <PostItem 
                :bodyText="event.bodyText" 
                :title="event.title"
                :likes="event.likes"
            />
        </div>
    </div>
</template>

<script>
import PostItem from './PostItem.vue';
import { mapActions, mapGetters, mapState } from 'vuex';

export default {
    name: 'PostList',
    data(){
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
            eventsData: 'event/events'
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

  components: {
    PostItem
  }
}
    // props: {
    //     posts: {
    //         type: Array,
    //         required: true
    //     }
    // },
    // components: {
    //     PostItem
    // }
//}
</script>

<style>
    .post-list {
        display: flex;
        margin: auto;
        width: 50vw;
        flex-direction: column;
        column-gap: 15px;
    }
</style>