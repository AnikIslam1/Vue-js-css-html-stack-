<template>

   <div id="app">
        
        <!-- 
        
        <div class="wrapper">
        <strong>But the site is under development</strong>
        <div>
        
        </div> -->
        
        
     <div class="wrapper" >

    <div class="container">
  
     <div id="nav">
                <router-link to="/Home">Home</router-link> |
                <router-link to="/Login">Sign out</router-link> 
                
        </div>
      <div class="alert alert-success" role="alert">
            <strong>Success!</strong> You have been signed in successfully!
            
            <router-view/>
        </div>
      
        <strong>But the site is under development</strong>
        
        </div>
        </div>   
    


   </div>
        
  
    

    

</template>

<script>



export default {
    
}

</script>

<style scoped>
div.static {
  position: static;
  border: 3px solid #df52526e;
}
.wrapper{
  position: static;
  min-height:50vh;
  background-color:rgba(129, 128, 128, 0.123);
  font-family: 'Open Sans', sans-serif;
  padding-top:60px;
  padding-bottom:0px;
  
  
}

body{
  padding: 20px;
}



</style>