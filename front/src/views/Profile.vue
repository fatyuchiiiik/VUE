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
import { mapActions } from 'vuex';
export default {
    data() {
        return {
            text:'',
            name: ''
        }
    },
    methods :{
    ...mapActions({
      getUserByUid: 'user/getUserByUid'
    })
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