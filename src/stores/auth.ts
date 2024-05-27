import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { jwtDecode } from 'jwt-decode'
import axios from 'axios'

export const useAuthStore = defineStore('auth', () => {
  const token = ref(localStorage.getItem('token') ?? '')
  const refresh_token = ref(localStorage.getItem('refreshToken') ?? '')

  const userPictureURL = computed(() => {
    const parsedToken: { user: { id: string; avatar: string } } = jwtDecode(token.value)
    return `https://cdn.discordapp.com/avatars/${parsedToken.user.id}/${parsedToken.user.avatar}.png`
  })

  const username = computed(() => {
    const parsedToken: { user: { global_name: string } } = jwtDecode(token.value)
    return parsedToken.user.global_name
  })

  const isAuthenticated = computed(() => {
    return token.value !== '' // TODO - Check to see if the token is valid
  })

  async function processToken(parseToken: string, parseRefreshToken: string) {
    try {
      token.value = parseToken
      refresh_token.value = parseRefreshToken

      localStorage.setItem('token', parseToken)
      localStorage.setItem('refreshToken', parseRefreshToken)
    } catch (error) {
      console.error('Error processing token:', error)
      throw new Error('Token processing failed')
    }
  }

  async function refreshToken() {

    if (useAuthStore().refresh_token === '') {
      return
    }

    const response = await fetch('http://localhost:3000/api/v1/auth/refresh', {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${useAuthStore().refresh_token}`
      }
    })

    console.log('refresh token response', response)

    if (!response.ok) {
      console.log('refresh token failed')
      return
    } else {
      const refreshData = await response.json()
      console.log('token refreshed', refreshData.token, refreshData.refreshToken)
      processToken(refreshData.token, refreshData.refreshToken)
    }

    // .then((res) => {
    //   console.log('token refreshed', res.data);
    //   processToken(res.data.token, res.data.refreshToken);
    //   return res
    // })
  }

  function setToken(jwtToken: string) {
    localStorage.setItem('token', jwtToken)
    token.value = jwtToken
    console.log('token set', token.value)
  }

  function logout() {
    token.value = ''
    localStorage.removeItem('token')
    localStorage.removeItem('refreshToken')
    window.location.reload()
  }

  return {
    token,
    refresh_token,
    isAuthenticated,
    username,
    userPictureURL,
    processToken,
    refreshToken,
    setToken,
    logout
  }
})
