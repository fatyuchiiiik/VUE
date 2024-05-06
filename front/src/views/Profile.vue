<template lang="">
    <div>
        <div class="window-label">
        {{ text }}
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
      this.text = 'You are not authorized'
    }
  }
}
</script>
<style lang="">
    
</style>