
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
// import VueGtag from "vue-gtag";
import Vue3Lottie from 'vue3-lottie'
import 'vue3-lottie/dist/style.css'

import store from './store'

const app = createApp(App)

app.use(store)
app.use(router)
app.use(Vue3Lottie)
app.mount('#app')
