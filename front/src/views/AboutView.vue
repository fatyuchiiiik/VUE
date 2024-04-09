<template>
  <div class="about">
    
    <PostCreate @create="createPost" />
    <PostList :posts="posts" />
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex';

import PostCreate from '@/components/PostCreate.vue'
import PostList from '@/components/PostList.vue';

export default {
  name: 'about',
  data() {
    return {
      posts: []
    }
  },  
  methods: {
    ...mapActions({
      getUserByUid:'user/getUserByUid'
    }),
    createPost(post) {
      this.posts.unshift(post)
    }
  },
  mounted(){
    this.getUserByUid()

  },
  computed:{
    user(){
      return this.$store.state.user.user
    }
  },
  components: {
    PostCreate,
    PostList
  }
}
</script>