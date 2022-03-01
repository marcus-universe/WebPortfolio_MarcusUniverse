
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import VueGtag from "vue-gtag";
import Vue3Lottie from 'vue3-lottie';
import { VueWindowSizePlugin } from 'vue-window-size/option-api';
// import rellax from 'rellax';


createApp(App).use(router).use(VueGtag, {
  property: {
    id: "G-LZVXHVVN1L"
  }
}).use(Vue3Lottie).use(VueWindowSizePlugin).mount('#app')
