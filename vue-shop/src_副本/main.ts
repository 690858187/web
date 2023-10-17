import './assets/main.css'

import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'
import 'element-plus/dist/index.css'

import constantRoute from '@/router'
import App from '@/App.vue'
import { createPinia } from 'pinia'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
/// 引入鉴权守卫
import './permisstion';

const app = createApp(App)

app.use(ElementPlus, {
    locale: zhCn,
})
app.use(constantRoute)
app.use(createPinia())

app.mount('#app')

for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
}
