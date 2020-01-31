import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Play from '../views/Playing.vue'
import SongList from '../views/SongList.vue'
import Search from '../views/Search.vue'
import User from '../views/User.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/play',
    name: 'play',
    component: Play
  },
  {
    path: '/songList',
    name: 'songList',
    component: SongList
  },
  {
    path: '/search',
    name: 'search',
    component: Search
  },
  {
    path: '/user',
    name: 'User',
    component: User
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
