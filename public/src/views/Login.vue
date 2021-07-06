<template>
  <div class="Login">
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <GoogleLogin />
  </div>
</template>

<script>
// @ is an alias to /src
import GoogleLogin from '@/components/GoogleLogin.vue'

export default {
  
  name: 'Login',
  components: {
    GoogleLogin
  }
}
</script>
