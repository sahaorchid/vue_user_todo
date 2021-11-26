<template>
  <div class="hello">
    <div v-if="!sactive">
      <button class="btn btn-primary" @click="superUser" v-if="isSuperUser" >{{msg}}</button>
      <h1>hello{{userData[0].name}}</h1>
        <ul >
          <li v-for="(data,index) in datas" :key="data.id" @click="deleteItem(index)">
            {{data.task}}</li>
        </ul>
        <button class="btn btn-primary" @click="addTodo">Add Todo</button>
        <addTodo v-if="flag" @flag="getTodo"/>
    </div>
    <SuperUser v-else/>
  </div>
</template>

<script>

import axios from 'axios'
import addTodo from '../../components/AddTodo'
import SuperUser from '../../components/SuperUser'

export default {
  name: 'HomePage',

  components: {
    addTodo,
    SuperUser
  },

  data(){
    return{
      datas : {},
      userData : [],
      flag : false,
      isSuperUser : false,
      sactive : false,
      msg : "Switch To SuperUser"

    }
  },

  created(){
    this.userTodo()
  },

  methods: {
    async userTodo(){
      this.userData=JSON.parse(window.localStorage.getItem('userData'))
      if(this.userData[0].id==1){
        this.isSuperUser=true
      }
      const res = await axios.get(`http://localhost:3000/api/users/todos/${this.userData[0].id}`);
      this.datas=res.data
    },

    addTodo(){
      this.flag =true
    },

    getTodo(value){
      if(value){
        this.userTodo()
      }
    },
    superUser(){
      this.sactive = true
    },
    async deleteItem(id){
      console.log(id)
      const res = await axios.delete(`http://localhost:3000/user/todos/${id}`);
      this.userTodo()
      console.log(res)

    }
  }
}
</script>
