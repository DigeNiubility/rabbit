import '@/styles/common.scss'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
import App from './App.vue'
import router from './router'
import {lazyPlugin} from '@/directives';
const app = createApp(App)
const pinia = createPinia()
app.use(createPinia())
pinia.use(piniaPluginPersistedstate)
app.use(pinia)
app.use(router)
app.use(lazyPlugin)
app.mount('#app')

//定义全局指令


