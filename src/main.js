// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'

import '../static/style/layout.scss'
// import './assets/theme/white/white.css'
// import './assets/theme/black/black.css'
import '../static/style/animate.scss'

import echarts from 'echarts'
Vue.prototype.$echarts = echarts;

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    store,
    components: { App },
    template: '<App/>'
})