<template>
  <div class="Home">
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
      
     <User_Profile />
  </div>
</template>

<script>


import User_Profile from '@/components/User_Profile.vue'

export default {
  name: 'Home',
    components: {
      
      User_Profile
    }
}
</script>

<style>

</style>