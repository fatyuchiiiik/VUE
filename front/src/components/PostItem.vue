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
    
    </div>
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