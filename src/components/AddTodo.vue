<template>
  <div class="hello" >
      <form @submit='addTodo'>
        <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">Add Todo</label>
            <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" v-model="todo">
        </div>
        <button type="submit" class="btn btn-primary">Submit</button>
    </form>
  </div>
</template>

<script>

import axios from 'axios'

export default {
  name: 'addTodo',
  created(){

    if(window.localStorage.getItem('logedin')){
      this.userData=JSON.parse(window.localStorage.getItem('userData'))
    }

  },

  data(){

      return{
          login : true,
          todo : "",
          userData : [],
      }      
  },

  methods: {

    addTodo(e) {

      this.$emit('flag',true );  
      e.preventDefault()

      axios.post('http://localhost:3000/user/todos', {
            task: this.todo,
            user_id: this.userData[0].id,
            })
            .then(function (response) {
                console.log(response)
            })
            .catch(function (error) {
                console.log(error);
            });
      },
  }
}
</script>
