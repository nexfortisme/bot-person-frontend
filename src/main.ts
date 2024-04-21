import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import ElementPlus from 'element-plus'

import App from './App.vue'
import router from './router'

import { useAuthStore } from './stores/auth'


const app = createApp(App)

app.use(createPinia())
app.use(router)

// Refreshing token on page load;
let authStore = useAuthStore()
authStore.refreshToken();

app.use(ElementPlus)

app.mount('#app')
