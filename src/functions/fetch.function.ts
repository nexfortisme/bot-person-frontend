// src/composables/useFetch.js
import { useAuthStore } from '@/stores/auth';
import { ref } from 'vue';

export function useFetch(url: string, method: string = 'GET', headers: any) {
  const data = ref(null);
  const error = ref(null);
  const loading = ref(true);

  async function fetchData() {
    try {
      const response = await fetch(url, {
        method: method,
        headers: headers,
      });
      if (!response.ok) {
        if(response.status === 401){
            useAuthStore().refreshToken();
        }
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      data.value = await response.json();
    } catch (err: any) {
      error.value = err.message;
    } finally {
      loading.value = false;
    }
  }

  fetchData();

  return { data, error, loading };
}