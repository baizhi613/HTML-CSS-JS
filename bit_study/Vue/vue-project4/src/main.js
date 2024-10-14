import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

const app=createApp(App)
app.mount(router)
app.mount('#app')
