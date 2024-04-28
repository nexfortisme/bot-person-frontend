import { useAuthStore } from '@/stores/auth'
import axios from 'axios'


function test() {
  return axios.get('http://localhost:3000/api/v1/test', {
    headers: {
      Authorization: `Bearer ${useAuthStore().token}`
    }
  })
}

function getUserInfo() {
  const userId = useAuthStore().userId;

  return axios.get(`http://localhost:3000/api/v1/user/info?userId=${userId}`, {
    headers: {
      Authorization: `Bearer ${useAuthStore().token}`
    }
  })

}

export default {
  test,
  getUserInfo
}
