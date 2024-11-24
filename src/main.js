import './bootstrap'
import './assets/main.css'

import { useAuth } from '@/composables/auth';

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

const { attempt } = useAuth()
const app = createApp(App)

app.use(router)

attempt().then(() => {
    app.mount('#app')
})

