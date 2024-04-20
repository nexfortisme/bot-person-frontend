import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { jwtDecode } from 'jwt-decode'

export const useAuthStore = defineStore('auth', () => {
  const token = ref(localStorage.getItem('token') ?? '')

  const userPictureURL = computed(() => {
    const parsedToken: { user: { id: string, avatar: string } } = jwtDecode(token.value)
    return `https://cdn.discordapp.com/avatars/${parsedToken.user.id}/${parsedToken.user.avatar}.png`
  })

  const username = computed(() => {
    const parsedToken: { user: { global_name: string } } = jwtDecode(token.value)
    return parsedToken.user.global_name
  })

  const isAuthenticated = computed(() => {
    return token.value !== '' // TODO - Check to see if the token is valid
  })

  async function processToken(parseToken: string) {
    try {
      token.value = parseToken
      localStorage.setItem('token', parseToken)
    } catch (error) {
      console.error('Error processing token:', error)
      throw new Error('Token processing failed')
    }
  }

  function setToken(jwtToken: string) {
    localStorage.setItem('token', jwtToken)
    token.value = jwtToken
    console.log('token set', token.value)
  }

  function logout() {
    token.value = ''
    localStorage.removeItem('token')
    window.location.reload()
  }

  return { token, isAuthenticated, username, userPictureURL, processToken, setToken, logout }
})
