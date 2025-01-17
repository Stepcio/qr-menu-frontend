import './bootstrap'
import './style.css'

import { useAuth } from '@/composables/useAuth';

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

const { fetchUser } = useAuth()
const app = createApp(App)

app.use(router)

fetchUser().then(() => {
    app.mount('#app')
})

