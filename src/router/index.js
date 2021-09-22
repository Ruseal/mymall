import Vue from 'vue'
import VueRouter from 'vue-router'

<<<<<<< HEAD
=======
const Home = () => import('views/home/Home');
const Category = () => import('views/category/Category');
const Shopcart = () => import('views/shopcart/Shopcart');
const Profile = () => import('views/profile/Profile');
const Detail = () => import('views/detail/Detail')

>>>>>>> 05c2bac (update commit)
Vue.use(VueRouter)

const routes = [
  {
<<<<<<< HEAD
    path: '/',
    redirect: '/home'
  },
  {
    path: "/home",
    component: () => import('../views/home/Home.vue')
  },
  {
    path: "/category",
    component: () => import('../views/category/Category.vue')
  },
  {
    path: "/cart",
    component: () => import('../views/cart/Cart.vue')
  },
  {
    path: "/profile",
    component: () => import('../views/profile/Profile.vue')
  },

=======
    path: '',
    redirect: '/home'
  },
  {
    path: '/home',
    component: Home,
  },



  {
    path: '/category',
    component: Category
  },
  {
    path: '/shopcart',
    component: Shopcart
  },
  {
    path: '/profile',
    component: Profile
  },
  {
    path: '/detail/:iid',
    component: Detail
  }
>>>>>>> 05c2bac (update commit)
]

const router = new VueRouter({
  routes,
  mode: 'history'
})

export default router
