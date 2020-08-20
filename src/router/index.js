import Vue from 'vue'
import Router from 'vue-router'

import Main from '@/components/Main.vue'
import Record from '@/components/pages/record/Record.vue'
import Balance from '@/components/pages/balance/Balance.vue'
import Detail from '@/components/pages/detail/Detail.vue'
import Setting from '@/components/pages/setting/Setting.vue'
import Statistic from '@/components/pages/statistic/Statistic.vue'
import Theme from '@/components/pages/theme/Theme.vue'

import InAccount from '@/components/pages/detail/src/InAccount.vue'
import InSequence from '@/components/pages/detail/src/InSequence.vue'

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
        children: [{
            path: 'payment',
        }, {
            path: 'income',
        }]
    }, {
        path: '/balance',
        component: Balance,

    }, {
        path: '/detail',
        component: Detail,
        children: [{
            path: '',
            component: InSequence
        }, {
            path: 'time',
            component: InSequence
        }, {
            path: 'account',
            component: InAccount
        }, {
            path: 'amount',
            component: InSequence
        }]
    }, {
        path: '/setting',
        component: Setting
    }, {
        path: '/statistic',
        component: Statistic,
    },{
        path: '/theme',
        component: Theme,
    }]
})
