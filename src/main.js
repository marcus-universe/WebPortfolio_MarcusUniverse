
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
// import VueGtag from "vue-gtag";
import Vue3Lottie from 'vue3-lottie';

// import rellax from 'rellax';


// createApp(App).use(router).use(VueGtag, {
//   property: {
//     id: "G-LZVXHVVN1L"
//   }
// }).use(Vue3Lottie).mount('#app')

createApp(App).use(router).use(Vue3Lottie).mount('#app')
