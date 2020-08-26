import Vue from 'vue'
import Vuex from 'vuex'

import DB from '../api/db'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        way: null,
        account: null,
        balance: null,

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

        settingPageData: {
            popBoxOpenFlag: false,
            confirmBoxOpenFlag: false,
            inputBoxOpenFlag: false,
            dataForPopBox: null,
        },

        globalDB: null
    },
    mutations: {
        closeRecordPopBox(state) {
            let i = state.recordPageData
            i.popBoxOpenFlag = false
            i.selectBoxFlag.openFlag = false
            i.keyBoardOpenFlag = false
        },
        openRecordPopBox(state, flag) {
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
        resetRecordView(state, flag) {
            if (flag == true) {
                state.curRecordData = {
                    amount: '0',
                    origin: null,
                    use: state.way.use[0],
                    account: state.account[0],
                    note: ' ',
                    time: null
                }
            } else {
                state.curRecordData = {
                    amount: '0',
                    origin: state.way.origin[0],
                    use: null,
                    account: state.account[0],
                    note: ' ',
                    time: null
                }
            }
        },
        closeSettingPopBox(state) {
            let i = state.settingPageData
            i.popBoxOpenFlag = false
            i.confirmBoxOpenFlag = false
            i.inputBoxOpenFlag = false
        },
        openSettingPopBox(state, flag) {
            let i = state.settingPageData
            i.popBoxOpenFlag = true

            if (flag.type === 'input') {
                i.confirmBoxOpenFlag = false
                i.inputBoxOpenFlag = true
                i.dataForPopBox = {
                    target: flag.target,
                    flag: flag.flag
                }
            } else if (flag.type === 'confirm') {
                i.inputBoxOpenFlag = false
                i.confirmBoxOpenFlag = true
                i.dataForPopBox = {
                    target: flag.target,
                    type: flag.flag
                }
            }
        },
        getGlobalRecordData(state) {
            state.globalDB = DB.read('record')
            console.log('读取record数据')
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
            } else {
                state.way = JSON.parse(localStorage.getItem('way'))
            }

            if (!localStorage.getItem('balance')) {
                localStorage.setItem('balance', JSON.stringify(balanceData))
                state.account = temp
            } else {
                state.balance = JSON.parse(localStorage.getItem('balance'))
                function caculateAccount() {
                    let temp = []
                    state.balance.forEach(item => {
                        temp.push(item.account)
                    })
                    return temp
                }
                state.account = caculateAccount()
            }
            console.log("载入基础数据")
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
        },
        getBalanceData(state, getters) {
            let [...raw] = getters.inAccountData

            let balanceData = JSON.parse(localStorage.getItem('balance'))

            let data = []

            for (let i = 0; i < raw.length; i++) {
                let temp = {
                    account: raw[i].title,
                    volume: 0
                }
                if (raw[i].data.length > 1) {
                    let total = raw[i].data.reduce((pre, next) => {
                        return parseFloat(pre.amount) + parseFloat(next.amount)
                    })
                    temp.volume = balanceData[i].volume + total
                } else if (raw[i].data.length == 1) {
                    temp.volume = balanceData[0].volume + raw[i].data[0].amount
                } else {
                    temp.volume = 0
                }
                data.push(temp)
            }

            console.log("获取账户余额数据")
            return data
        }
    }
})