import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginView from '../views/LoginView.vue'
import PyLView from '../views/PyLView.vue'
import HomePage from '@/components/HomePage.vue'
import DashboardPage from '@/components/DashboardPage.vue'
import AboutPage from '@/components/AboutPage.vue'
import PyLHand from '@/components/pyl-tcg/PyLHand.vue'
import { isAuthenticated, setToken } from '@/services/auth-service'
import { jwtDecode } from 'jwt-decode'
import { useAuthStore } from '@/stores/auth'

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
      path: '/pyl-tcg',
      component: PyLView,
      children: [
        {
          path: '/',
          component: PyLHand
        }
      ],
      meta: {
        requiredAuth: true
      }
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView as any
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
  if (to.meta.requiredAuth && !isAuthenticated()) {
    console.log('sending to login')
    next('/login')
  } else {
    console.log('continue')
    next()
  }
})

function isTokenExpired(token: string) {
  const decoded = jwtDecode(token)
  const currentTime = Date.now() / 1000
  return (decoded.exp as number) < currentTime
}

export default router
