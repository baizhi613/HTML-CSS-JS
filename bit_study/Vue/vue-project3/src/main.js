import {createApp} from 'vue'

import App from './App.vue'

import BitButton from './components/BitButton.vue'

const app=createApp(App)
app.component('BitButton',BitButton)
app.mount('#app')
