<template>

<div class="wrapper" >
<!-- <div class="container2"> -->
  <div class="container">
  
  

     <!-- <a href="" class="fb-login social-login">
      Login with Facebook  ///form @submit.prevent="SubmitForm"
    </a>  -->
     <a href="" class="google-login social-login">
      Log in with Google
    </a>
    <p class="seperator" >-OR-</p>
    <form  autocomplete="off" action="">
      <div class="group">
        <label for="username">User Name:</label>
        <input type="username" id="username" name="username">
      </div>
      <!-- <div class="group">
        <label for="password">Password:</label>
        <input id="password" type="password" name="password">
      </div> -->
      <a href="" class="forget-link">Forgot your name?</a>
      <p class="seperator" ><input class="log-login" type="submit" value="Log In" id="submit"></p>
    </form>
    
    <router-link to="/">Sign Up</router-link>
  </div>
  <!-- </div> -->
</div>



  

</template>

<script>
export default {






}
</script>

<style scoped>

*{
  margin:0;
  padding:0;
  box-sizing:border-box;
}

.wrapper{
  min-height:50vh;
   min-width:60h;   
  background-color:rgb(255, 189, 51);
  font-family: "Poppins", sans-serif;
  padding-top:50px;
  padding-bottom:50px;
  border-radius: 20px;
  box-shadow:0 0 20px rgba(83, 83, 83, 0.596);
  
}
.container{
  max-width:400px;
  margin:0 auto;
  background-color:rgb(116, 116, 116);
  text-align:center;
  padding:50px 0;
  box-shadow:0 0 20px rgba(233, 0, 0, 0.596);
  border-radius:20px;
  background: rgba(245, 245, 245, 0.993);
  
}

.social-login{
  display:block;
  width:70%;
  margin: 5px auto;
  text-decoration:none;
  padding:10px 15px;
  color:#fff;
  border-radius:3px;
  margin-bottom:10px;
  transition:all .3s ease-in-out;
  
}
.log-login{
  display:block;
  width:100%;
  margin: 10px auto;
  text-decoration:none;
  padding:10px 15px;
  color:#fff;
  border-radius:3px;
  margin-bottom:10px;
  transition:all .3s ease-in-out;
}
.social-login:hover{
    box-shadow:0 10px 15px -5px rgba(0,0,0,0.4);
}
a.fb-login{
  background-color:#3B5998;
}
a.google-login{
  background-color:#db4437;
}
form{
  max-width:250px;
  margin:0 auto;
  text-align:left;
  
}

p.seperator{
  margin:25px;
}
div.group{
  margin-top:15px;
  
}
label{
  display:block;
  margin-bottom:10px;
  
 
}
div.group input{
  width:100%;
  padding:10px 4px;
  outline:none;
  
}
a.forget-link{
  color:black;
  display:block;
  margin:10px 0;
}

input[type="submit"]{
  padding:15px 35px;
  outline:none;
  border:None;
  background-color:#20c198;
  color:white;
  transition:all .3s ease-in-out;
  margin-left:4px;
  
}
input[type="submit"]:hover{
  cursor:pointer;
  box-shadow:0 10px 15px -5px rgba(0,0,0,0.4);
}

</style>