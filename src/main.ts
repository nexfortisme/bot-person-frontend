import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import ElementPlus from 'element-plus'
// import VueRouter from 'vue-router'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
// app.use(VueRouter)
app.use(router)

app.use(ElementPlus)

app.mount('#app')