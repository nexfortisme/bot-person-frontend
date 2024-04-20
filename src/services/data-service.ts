import { useAuthStore } from '@/stores/auth'
import axios from 'axios'


function test() {
  return axios.get('http://localhost:3000/api/v1/test', {
    headers: {
      Authorization: `Bearer ${useAuthStore().token}`
    }
  })
}

export default {
  test
}
