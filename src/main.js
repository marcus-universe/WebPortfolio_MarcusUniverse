
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import VueGtag from "vue-gtag";


createApp(App).use(router).use(VueGtag, {
  property: {
    id: "G-LZVXHVVN1L"
  }
}).mount('#app')
