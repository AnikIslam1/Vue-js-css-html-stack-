<template>


  <div class="wrapper" >

  <div class="container">
  <!-- <a href="" class="fb-login social-login">Login with Facebook  ///form @submit.prevent="SubmitForm"</a>   -->
    <!-- // Button to login with google ui rendered using the renderParams object
    // The rendered button can't be use to logout since it is rendered by the google api and will only login
    // If you add the logoutButton param to true it will show a normal button without styles
    // :onFailure="onFailure"  -->
    
    <form ><GoogleLogin :params="params" :renderParams="renderParams" :onSuccess="onSuccess" ></GoogleLogin></form>
    
    <p class="seperator" >-OR-</p>
    <form @submit.prevent="SubmitForm" autocomplete="off" action="">
          
      <div class="group">
        <label for="name">User Name:</label>
        <input type="text" placeholder="Enter Name" v-model="registers.name" required>
      </div>
      <div class="group">
        <label for="mail">Email:</label>
        <input type="email" placeholder="Enter Mail"  v-model="registers.mail" required>
      </div>
      <div class="group">
        <label for="password">Password:</label>
        <input type="text" placeholder="Enter Password" v-model="registers.password" required>
      </div>
      
      <!-- <a href="" class="forget-link">Forgot password?</a>
      <input type="submit" value="Sign Up" id="submit"> -->
      <p class="seperator" ><input class="sign-login" type="submit" value="Sign In" id="submit"></p>
    </form>
    
    <router-link to="/Login">Log in</router-link>
    <GoogleLogin :params="params" :logoutButton=true>Logout</GoogleLogin>
  </div>
</div>
</template>

<script>
import GoogleLogin from 'vue-google-login';
export default {
//client api id section
name: 'Register',

data() {
            return {
                //client_id is the only required property but you can add several more params, full list down bellow on the Auth api section
                params: {
                    client_id: "696977402272-jpq0ovd8mp78np6sjnqatjdp0elkg36t.apps.googleusercontent.com"
                        },
                 //only needed if you want to render the button with the google ui
                      renderParams: {
                        width: 250,
                        height: 50,
                        longtitle: true
                        },
                registers: {
                              'name': '',
                              'mail': '',
                              'password': '',
                          },
                registerlist: [],
                UserInfo: {}
        }},
async created(){await this.getRegister();},
components: {GoogleLogin},

methods: {
        async getRegister(){
          var response = await fetch('http://127.0.0.1:8000/api/register/');
          this.registerlist = await response.json();
        },
        async SubmitForm(){
        await this.getRegister();
        await fetch('http://127.0.0.1:8000/api/register/',{
              method: 'POST',
              headers: {
                        'Content-Type': 'application/json'
                      },
              body: JSON.stringify(this.registers)
            });
              await this.getRegister();
        },
        onSuccess(googleUser) 
        {  
          // this.$router.push Redirect to the destination page 
          this.$router.push({ name: 'Home', query: { redirect: '/Home' } }); 
          
          this.UserInfo(JSON.stringify(googleUser));
           
          console.log(JSON.stringify(googleUser));
          //This only gets the user information: id, name, imageUrl and email
          //this.UserInfo.push(JSON.stringify(googleUser.getBasicProfile()));
        },
        
    }

}

</script>

<style scoped>

*{
  margin:0;
  padding:0;
  box-sizing:border-box;
  
}
.wrapper{
  margin: auto;
  min-height:50vh;
  min-width:310px;   
  background-color:rgb(255, 189, 51);
  font-family: "Poppins", sans-serif;
  padding-top:50px;
  padding-bottom:50px;
  border-radius: 20px;
  box-shadow:0 0 20px rgb(83, 83, 83);
  
}
.container{
  min-height:45vh;
  max-width:100px;
  margin: auto;
  min-width:300px;
  padding:50px 20px;
  box-shadow:0 0 20px rgba(255, 0, 0, 0.822);
  border-radius:20px;
  background: rgba(245, 245, 245, 0.993);
  
}


.social-login{
  display:block;
  width:100%;
  margin: auto;
  text-decoration:none;
  padding:10px 0px;
  color:rgb(138, 7, 7);
  border-radius:3px;
  margin-bottom:10px;
  transition:all .3s ease-in-out;
}
.sign-login{
  display:block;
  width:100%;
  margin: 5px auto;
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
}
input[type="submit"]:hover{
  cursor:pointer;
  box-shadow:0 10px 15px -5px rgba(0,0,0,0.4);
}

</style>

