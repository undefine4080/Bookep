import Vue from 'vue'
import Vuex from 'vuex'

import DB from '../api/db'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        way: null,
        account: null,

        curRecordData: {
            amount: '0',
            origin: null,
            use: null,
            account: null,
            note: ' ',
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
        },

        globalDB: null
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
                    state.curRecordData.use = null
                    state.curRecordData.origin = commit.data
                    break

                case 'use':
                    state.curRecordData.origin = null
                    state.curRecordData.use = commit.data
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
                origin: null,
                use: null,
                account: null,
                note: ' ',
                time: null
            }
        },
        getGlobalRecordData(state) {
            state.globalDB = DB.read('record')
        },
        initBaseData(state) {
            const wayData = {
                origin: ['工资', '兼职', '投资理财', '红包', '奖金', '其他'],
                use: ['吃饭', '住宿', '交通', '购物', '送礼', '旅游', '其他'],
            }

            const balanceData = [{
                account: '支付宝',
                volume: 0,
            }, {
                account: '微信',
                volume: 0,
            }, {
                account: '现金',
                volume: 0,
            }, {
                account: '工商银行',
                volume: 0,
            }, {
                account: '建设银行',
                volume: 0,
            }, {
                account: '农业银行',
                volume: 0,
            }, {
                account: '中国银行',
                volume: 0,
            }, {
                account: '招商银行',
                volume: 0,
            }]

            let temp = []
            balanceData.forEach(item => {
                temp.push(item.account)
            })

            if (!localStorage.getItem('way')) {
                localStorage.setItem('way', JSON.stringify(wayData))
                state.way = wayData
            } else if (!localStorage.getItem('balance')) {
                localStorage.setItem('balance', JSON.stringify(balanceData))
                state.account = temp
            } else {
                console.log("从 localstorage 读取基础数据")

                state.way = JSON.parse(localStorage.getItem('way'))

                let temp = []
                JSON.parse(localStorage.getItem('balance')).forEach(item => {
                    temp.push(item.account)
                })
                state.account = temp
            }
        },
        updateBaseData(state, option) {
            if (option.dbName === 'way') {
                localStorage.setItem('way', option.newData)
            } else if (option.dbName === 'balance') {
                localStorage.setItem('balance', option.newData)
            } else {
                console.log("基础数据更新错误")
            }
        }
    },
    getters: {
        inTimeData(state) {
            let [...record] = state.globalDB
            return record.reverse()
        },
        inAmountData(state) {
            let [...record] = state.globalDB

            for (let i = 0; i < record.length - 1; i++) {
                for (let j = i + 1; j < record.length; j++) {
                    if (Math.abs(Number(record[i].amount)) < Math.abs(Number(record[j].amount))) {
                        let temp = record[j]
                        record[j] = record[i]
                        record[i] = temp
                    }
                }
            }
            return record
        },
        inAccountData(state) {
            let [...record] = state.globalDB

            let accountCategories = []

            for (let i = 0; i < state.account.length; i++) {
                let temp = {
                    title: state.account[i],
                    data: []
                }

                for (let j = 0; j < record.length; j++) {
                    if (record[j].account === state.account[i]) {
                        temp.data.push(record[j])
                    } else {
                        continue
                    }
                }
                accountCategories.push(temp)
            }
            return accountCategories
        }
    }
})