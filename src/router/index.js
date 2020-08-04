import Vue from 'vue'
import Router from 'vue-router'

import Main from '@/components/Main.vue'
import Record from '@/components/pages/record/Record.vue'

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [{
        path: '/',
        component: Main
    }, {
        path: '/main',
        component: Main
    }, {
        path: '/record/:id',
        component: Record,
        props: 'true',
        children: [{
            path: 'payment',
        }, {
            path: 'income',
        }, ]
    }]
})