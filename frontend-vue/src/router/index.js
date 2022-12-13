import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/services',
    name: 'services',
    // route level code-splitting
    // this generates a separate chunk (services.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "services" */ '../views/ServicesView.vue')
  },
  {
    path: '/store',
    name: 'store',
    // route level code-splitting
    // this generates a separate chunk (store.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "store" */ '../views/StoreView.vue')
  },
  {
    path: '/login',
    name: 'login',
    // route level code-splitting
    // this generates a separate chunk (login.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "login" */ '../views/LoginView.vue')
  },
  // {
  //   path: '/register',
  //   name: 'register',
  //   // route level code-splitting
  //   // this generates a separate chunk (register.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "register" */ '../views/LoginView.vue')
  // },
  {
    path: '/checked',
    name: 'checked',
    // route level code-splitting
    // this generates a separate chunk (checked.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "checked" */ '../views/CheckedView.vue'),
    meta: {
      requireAuth: false,
    }
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requireAuth)) {
    if (localStorage.getItem('jwt') == null) {
      next({
        path: '/'
      });
    } else {
      next();
    }
  }else {
    next();    
  }
});

export default router
