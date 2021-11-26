<template>
  <div class="hello">
      <form @submit='registerForm'>
        <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">Name</label>
            <input type="text" class="form-control"  aria-describedby="emailHelp" v-model="name">
            <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
        </div>  
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
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'Register',
  
  data(){
      return{
          name:'',
          email:'',
          password:''
      }      
  },

  methods: {
    registerForm(e) {
      console.log("hello")
      e.preventDefault()
      axios.post('http://localhost:3000/auth/register', {
      name: this.name,
      email: this.email,
      password : this.password
      })
      .then(function () {
                window.location.href='/'
      })
      .catch(function (error) {
          console.log(error);
      });
    }
  }

}
</script>

