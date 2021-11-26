import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../views/todos/Home.vue'
import Login from '../views/auth/Login.vue'
import Register from '../views/auth/Register.vue'

const routes = [

  {
    path: '/',
    name: 'Login',
    component: Login
  },
  {
    path: '/register',
    name: 'Register',
    component: Register
  },
  {
    path: '/home',
    name: 'HomePage',
    component: HomePage,
    meta:{auth:true}
  },

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to,from,next)=>{
  if(!window.localStorage.getItem('logedin') && to.meta.auth){
    next('/')
  }else{
    next()
  }

})


export default router
