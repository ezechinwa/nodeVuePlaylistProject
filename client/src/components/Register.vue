<template>
  <div class="hello">
    <h1>This is the registration section of the website</h1>
    <p>Happy registration</p>

    <form action="/register" method="post">
          <input type="email" name="email" v-model="email" placeholder="Email Address" >
       <input type="password" name="password" v-model="password" placeholder="Password Address" >
       <button @click="register"> Register here</button>
    </form>
    


       <p v-if="email"> This will be displayed {{ this.email }}</p>
    
  </div>
</template>

<script>
import Authentication from '@/services/Authentication'

export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      email: '',
      password: '' }
  },
  methods :{
  async  register(e){ 
      e.preventDefault();
      const response = await Authentication.register({
        "email" : this.email , 
        "password" : this.password
      });

      console.log(response.data)
    }
  },
  watch: { 
         email (value)
            { 
              console.log('this email value has changed to ' + value)
            }
        }, 
  mounted() {
      setTimeout(()=>{
         this.email = "";
      },3000)
  }
}
</script>
