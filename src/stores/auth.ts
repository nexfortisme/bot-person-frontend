import { ref, computed } from 'vue'
import { defineStore, mapActions } from 'pinia'
import axios from 'axios'
import { jwtDecode } from 'jwt-decode'
// import jwt from 'jsonwebtoken'

export const useAuthStore = defineStore('auth', () => {
  const token = ref(localStorage.getItem('token') ?? '')
  const username = ref('')
  const userPictureURL = ref('')

  async function processToken(parseToken: string) {
    try {
      const response: { user: { global_name: string; id: string; avatar: string }; token: string } =
        jwtDecode(parseToken)

      username.value = response.user.global_name
      userPictureURL.value = `https://cdn.discordapp.com/avatars/${response.user.id}/${response.user.avatar}.png`

      token.value = parseToken
      localStorage.setItem('token', parseToken)
    } catch (error) {
      console.error('Error processing token:', error)
      throw new Error('Token processing failed')
    }
  }

  const isAuthenticated = computed(() => {
    return token.value !== '' // TODO - Check to see if the token is valid
  })

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
