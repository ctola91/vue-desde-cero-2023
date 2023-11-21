import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import AppHeader from '@/shared/components/layout/AppHeader.vue'
import router from './router'

const app = createApp(App)

app.component('AppHeader', AppHeader)
app.use(router)

app.mount('#app')
