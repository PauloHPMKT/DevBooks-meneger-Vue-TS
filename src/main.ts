import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import './assets/sass/main.scss'
import { store } from './store'

const app = createApp(App)

app.use(router)
app.config.globalProperties.$store = store
app.provide('$store', store)
app.mount('#app')
