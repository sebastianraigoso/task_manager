import './assets/main.css'

import { createApp } from 'vue'
import router from './router'

import App from './App.vue'
import naive from 'naive-ui'
import 'vfonts/Lato.css'

createApp(App)
  .use(router)
  .use(naive)
  .mount('#app')