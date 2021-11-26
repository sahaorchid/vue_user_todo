<template>
  <div class="hello" >
      <form @submit='loginForm' v-if='login'>
        <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">Email address</label>
            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" v-model="email">
            <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
        </div>
        <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label">Password</label>
            <input type="password" class="form-control" id="exampleInputPassword1" v-model="password">
        </div>
        <button type="submit" class="btn btn-primary">Submit</button>
    </form>
    <button type="button" class="btn btn-primary" @click="logout" v-else>Logout</button>
  </div>
</template>

<script>
import axios from 'axios'


export default {
  name: 'Login',
  created(){
    if(window.localStorage.getItem('logedin')){
      this.login=false
    }
  },

  data(){
      return{
          login:true,
          email:'',
          password:''
      }      
  },

  methods: {

    loginForm(e) {
      e.preventDefault()
      axios.post('http://localhost:3000/auth/login', {
            email: this.email,
            password: this.password,
            })
            .then(function (response) {
                if(response.data.msg=="successfully logged in"){
                      window.localStorage.setItem('logedin',true)
                      window.localStorage.setItem('userData',JSON.stringify(response.data.data))
                      window.location.href='/home'
                }
            })
            .catch(function (error) {
                console.log(error);
            });
      },

      logout(){
        window.localStorage.removeItem('logedin')
        window.localStorage.removeItem('userData')
        window.location.href='/'
      }
  }

}
</script>

