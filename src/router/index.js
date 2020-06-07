import Vue from 'vue'
import VueRouter from 'vue-router'

const Login = () => import('views/login/Login')

const Home = () => import('views/home/Home')

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/login',
  },
  {
    path: '/login',
    component: Login,
  },
  {
    path: '/Home',
    component: Home,
  },
]

const router = new VueRouter({
  routes,
  mode: 'history',
})

//to将要访问的路径
//from 代表跳转路径
//next 放行
router.beforeEach((to, from, next) => {
  if (to.path === '/login') {
    //登录页
    window.sessionStorage.clear()
    return next()
  }
  const tokenStr = window.sessionStorage.getItem('token')
  if (!tokenStr) {
    next('/login')
  }
  return next()
})

export default router
