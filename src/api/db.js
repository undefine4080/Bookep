export default {
    // indexedDB兼容
    indexedDB: window.indexedDB || window.webkitindexedDB || window.msIndexedDB || mozIndexedDB,

    db: null,

    dbName: 'bookep',

    dbVersion: 1,

    openDB: function () {
        const request = this.indexedDB.open(this.dbName, this.dbVersion)

        request.onerror = function (event) {
            console.log('IndexedDB数据库打开错误', event)
        }

        // 二次打开，成功打开数据库的回调
        let self = this

        request.onsuccess = function (event) {
            self.db = event.target.result
        }

        // 初次打开，会调用的方法
        request.onupgradeneeded = function (event) {
            // 临时开启的 IDB对象
            let db = event.target.result

            const newStoreName = ['record', 'balance']

            db.onerror = function (event) {
                console.log('数据库打开失败')
            }

            if (!db.objectStoreNames.contains('record')) {
                let objectStore = db.createObjectStore('record', {
                    keyPath: 'id',
                    autoIncrement: true
                })

                // 新建索引
                objectStore.createIndex('account', 'account', {
                    unique: false
                })
                objectStore.createIndex('time', 'time', {
                    unique: false
                })
                objectStore.createIndex('use', 'use', {
                    unique: false
                })
                objectStore.createIndex('origin', 'origin', {
                    unique: false
                })
                objectStore.createIndex('amount', 'amount', {
                    unique: false
                })
                objectStore.createIndex('note', 'note', {
                    unique: false
                })

                console.log("对象仓库 record 初始化成功")
            }
        }
    },
    add(storeName, newItem) {
        this.db.transaction(storeName, "readwrite").objectStore(storeName).add(newItem)
    },
    read(storeName) {
        let objectStore = this.db.transaction(storeName, "readonly").objectStore(storeName)

        let result = new Array(0)

        objectStore.openCursor().onsuccess = function (event) {
            let cursor = event.target.result
            if (cursor) {
                result.push(cursor.value)
                cursor.continue()
            }
        }
        return result
    }
}