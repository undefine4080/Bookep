import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        way: {
            origin: ['工资', '兼职', '投资理财', '红包', '奖金', '其他'],
            use: ['吃饭', '住宿', '交通', '购物', '送礼', '旅游', '其他'],
        },
        account: ['支付宝', '微信', '现金', '工商银行', '建设银行', '农业银行', '中国银行', '招商银行'],

        curRecordData: {
            amount: '0',
            origin: null || '工资',
            use: null || '交通',
            account: null || '支付宝',
            note: null,
            time: null
        },

        recordPageData: {
            popBoxOpenFlag: false,
            selectBoxFlag: {
                openFlag: false,
                dataSource: null,
                whichBox: ''
            },
            keyBoardOpenFlag: false
        }
    },
    mutations: {
        closePopBox(state) {
            let i = state.recordPageData
            i.popBoxOpenFlag = false
            i.selectBoxFlag.openFlag = false
            i.keyBoardOpenFlag = false
        },
        openPopBox(state, flag) {
            let i = state.recordPageData
            let l = i.selectBoxFlag

            i.popBoxOpenFlag = true

            if (flag == 'keyboard') {
                i.keyBoardOpenFlag = true
            } else {
                l.openFlag = true

                if (flag == 'usebox') {
                    l.dataSource = state.way.use
                    l.whichBox = 'use'
                } else if (flag == 'originbox') {
                    l.dataSource = state.way.origin
                    l.whichBox = 'origin'
                } else {
                    l.dataSource = state.account
                    l.whichBox = 'account'
                }
            }
        },
        syncRecord(state, commit) {
            switch (commit.title) {
                case 'amount':
                    state.curRecordData.amount = commit.data
                    break

                case 'origin':
                    state.curRecordData.origin = commit.data
                    state.curRecordData.use = null
                    break

                case 'use':
                    state.curRecordData.use = commit.data
                    state.curRecordData.origin = null
                    break

                case 'account':
                    state.curRecordData.account = commit.data
                    break

                case 'note':
                    state.curRecordData.note = commit.data
                    break
            }
        },
        initRecordView(state) {
            state.curRecordData = {
                amount: '0',
                origin: null || '工资',
                use: null || '交通',
                account: null || '支付宝',
                note: null,
                time: null
            }
        }
    }
})