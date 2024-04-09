<template>
    <div class="post-info">
        <div class="title">
            {{ title }}
        </div>
        <div class="body">
            {{ body }}
        </div>
    </div>
</template>

<script>
export default {
    props: {
        title: {
            type: String,
            required: true
        },
        body: {
            type: String,
            required: true
        }
    }
}
</script>

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
</style>