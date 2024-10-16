import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import 'D:/code/HTML+CSS+JS/vue-rabbit/src/styles/common.scss'
import { lazyPlugin } from './directives'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(lazyPlugin)
app.mount('#app')

