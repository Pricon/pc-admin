import Vue from 'vue'
import App from './App.vue'

// import ElementUI from 'element-ui'  // 引入组件
// import "element-ui/lib/theme-chalk/index.css"; // 引入样式

import { Image, Tabs, TabPane, Menu, MenuItem } from 'element-ui';

import router from './router'
Vue.config.productionTip = false

// Vue.use(ElementUI); // 全局引入
Vue.component(Image.name, Image)
Vue.component(Tabs.name, Tabs)
Vue.component(TabPane.name, TabPane)
Vue.component(Menu.name, Menu)
Vue.component(MenuItem.name, MenuItem)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
