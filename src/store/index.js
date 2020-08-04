import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        amount: 0,
        way: {
            origin: ['工资', '兼职', '投资理财', '红包', '奖金', '其他'],
            use: ['吃饭', '住宿', '交通', '购物', '送礼', '旅游', '其他'],
        },
        account: ['支付宝', '微信', '现金', '工商银行', '建设银行', '农业银行', '中国银行', '招商银行']
    }
})