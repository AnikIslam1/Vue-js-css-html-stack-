<template>
  <div class="Register">
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <GoogleRegister />
  </div>
</template>

<script>
// @ is an alias to /src
import GoogleRegister from '@/components/GoogleRegister.vue'

export default {
  name: 'Register',
  components: {
    GoogleRegister
  }
}
</script>
