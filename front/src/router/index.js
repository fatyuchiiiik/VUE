import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '@/views/AboutView.vue'
import Login from '@/views/Login.vue'
import Register from '@/views/Register.vue'
import Profile from '@/views/Profile.vue'
import instance from '@/middlewares'
import UserNews from '@/views/UserNews.vue'

/*проверка авторизирован ли пользователь прописывается здесь*/
const routes = [
  { // Мета добавления маршрута
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    alwaysShow: false,
    component: AboutView,
    meta: {auth: true},
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/register',
    name: 'register',
    component: Register
  },
  {
    path: '/profile',
    name: 'profile',
    component: Profile,
    meta: {auth: true}
  },
  {
    path: '/news',
    name: 'news',
    component: UserNews,
    meta: {auth: true}
  }

]
// export const asyncRoutes = [
//   {
//     path: '/about',
//     name: 'about',
//     alwaysShow: false,
//     component: AboutView,
//     meta: {auth: true, uid:"1ec8ef79-aac5-4340-8396-3078922a82c7"},
//   }
// ]
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach(async(to, from, next)=>
{
  try{
    const requireAuth = to.matched.some (record => record?.meta.auth)
    if (requireAuth){
      const response = await instance.get('/api/users')
      if (response.status==200){
        return next()
      } else if (response.status==401){
        return next('/')

      }
    }
    return next()
  } catch{
    console.log(error.message);
    return next('/')
  }
})

export default router