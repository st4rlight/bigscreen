import Vue from 'vue'
// import  'echarts/theme/dark.js'
// 引入echarts和vue-echarts
import ECharts from 'vue-echarts'
import echarts from 'echarts'
// 引入element-ui
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
// 引入阿里iconfont
import '@/assets/fonts/iconfont.js';
import App from './App.vue'
import router from './router'
// 引入bootstrap-vue
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(BootstrapVue);
Vue.use(ElementUI);
Vue.component('v-chart', ECharts);
Vue.prototype.$echarts = echarts;
Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount('#app');
