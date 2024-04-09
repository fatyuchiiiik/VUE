<template>
    <div class="post-list">
        <div v-for="(post, index) in posts" :key="index">
            <PostItem 
                :body="post.body" 
                :title="post.title"
            />
        </div>
    </div>
</template>

<script>
import PostItem from './PostItem.vue';

export default {
    props: {
        posts: {
            type: Array,
            required: true
        }
    },
    components: {
        PostItem
    }
}
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