// import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import './assets/all.scss' // 匯入 all.scss

const app = createApp(App)

app.use(router)

app.mount('#app')
