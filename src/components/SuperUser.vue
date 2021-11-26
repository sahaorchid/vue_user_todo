<template>
  <div class="hello" >
      <ul >
        <li v-for="data in datas" :key="data.id">
          {{data.task}}</li>
      </ul>
  </div>
</template>

<script>

import axios from 'axios'

export default {
  name: 'SuperUser',


  data(){
    return{
      datas : [],
    }
  },

  created(){
    this.userTodo()
  },

  methods: {
    async userTodo(){
      const res = await axios.get("http://localhost:3000/user/todos");
      this.datas=res.data
    },
  }
}
</script>