import Vue from 'vue'
import VueRouter from 'vue-router'

const Home = () => import('../views/home/Home.vue')
const FenLei = () => import('../views/fenlei/FenLei.vue')
const Cart = () => import('../views/cart/Cart.vue')
const User = () => import('../views/user/User.vue')

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: Home,
    component: Home
  }, {
    path: '/fenlei',
    name: FenLei,
    component: FenLei
  }, {
    path: '/cart',
    name: Cart,
    component: Cart
  }, {
    path: '/user',
    name: User,
    component: User
  },
]

const router = new VueRouter({
  routes,
  mode: "history"
})

export default router
