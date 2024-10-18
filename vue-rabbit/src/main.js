import { createApp } from 'vue'
import { createPinia } from 'pinia'
import piniaPluginPersistedState from 'pinia-plugin-persistedstate'
import App from './App.vue'
import router from './router'

import 'D:/code/HTML+CSS+JS/vue-rabbit/src/styles/common.scss'
import { lazyPlugin } from './directives'
import {componentPlugin} from '@/components'

const app = createApp(App)
const pinia=createPinia()
pinia.use(piniaPluginPersistedState)
app.use(pinia)
app.use(router)
app.use(lazyPlugin)
app.use(componentPlugin)
app.mount('#app')

