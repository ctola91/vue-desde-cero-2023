import { createRouter, createWebHashHistory, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import NewView from '@/views/NewView.vue'
import ProductView from '@/views/ProductView.vue'
import UserView from '@/views/UserView.vue'
import UserProfile from '@/components/users/views/UserProfile.vue'
import UserPosts from '@/components/users/views/UserPosts.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/new',
      name: 'new',
      component: NewView
    },
    {
      path: '/product/:id',
      name: 'product',
      component: ProductView
    },
    {
      path: '/user/:id',
      name: 'user',
      component: UserView,
      children: [
        { path: 'profile', name: 'profile', component: UserProfile },
        { path: 'posts', name: 'posts', component: UserPosts }
      ]
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    }
  ]
})

export default router
