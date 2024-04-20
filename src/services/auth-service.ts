import axios from 'axios'

const API_URL = 'http://localhost:3000/api/v1'

function login() {
  return (window.location.href = `${API_URL}/auth/discord`)
}

function logout() {
  return axios.post(`${API_URL}/logout`)
}

function fetchCurrentUser() {
  return axios.get(`${API_URL}profile`)
}

export function isAuthenticated() {
  // Check if user is authenticated, e.g. by validating a JWT token
  return !!localStorage.getItem('token')
}

export function setToken(token: string) {
  localStorage.setItem('token', token)
}

export default {
  login,
  logout,
  fetchCurrentUser,
  isAuthenticated,
  setToken
}
