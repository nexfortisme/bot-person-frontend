import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginView from '../views/LoginView.vue'
import HomePage from '@/components/HomePage.vue'
import DashboardPage from '@/components/DashboardPage.vue'
import AboutPage from '@/components/AboutPage.vue'
import { isAuthenticated, setToken } from '@/services/auth-service'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      children: [
        {
          path: '/',
          component: HomePage
        },
        {
          path: '/dashboard',
          component: DashboardPage
        },
        {
          path: '/about',
          component: AboutPage
        }
      ],
      meta: {
        requiredAuth: true
      }
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView
    },
    {
      path: '/auth/callback',
      name: 'AuthCallback',
      component: () => import('../views/AuthCallbackView.vue') // Lazy load the auth callback component
    }
  ]
})

// Security Middleware
router.beforeEach((to, from, next) => {
  console.log('to', to)

  /*
  if (to.query.token) {
    setToken(to.query.token.toString())
    next('/dashboard')
  } else
  */ 

  if (to.meta.requiredAuth && !isAuthenticated()) {
    console.log('sending to login')
    next('/login')
  } else {
    console.log('continue')
    next()
  }
})

export default router
