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

            const newStoreName = ['record','balance']

            db.onerror = function (event) {
                console.log('数据库打开失败')
            }

            // 创建一个数据库存储对象
            newStoreName.forEach(item => {
                switch (item){
                    case 'record':
                        if (!db.objectStoreNames.contains(item)) {
                            let objectStore = db.createObjectStore(item, {
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
                            objectStore.createIndex('id', 'id', {
                                unique: true
                            });
            
                            console.log("对象仓库 record 初始化成功")
                        }
                    break

                    case 'balance':
                        if (!db.objectStoreNames.contains(item)) {
                            let objectStore = db.createObjectStore(item, {
                                keyPath: 'id',
                                autoIncrement: true
                            })
            
                            // 新建索引
                            objectStore.createIndex('account', 'account', {
                                unique: false
                            })
                            objectStore.createIndex('volume', 'volume', {
                                unique: false
                            })
                            objectStore.createIndex('id', 'id', {
                                unique: true
                            })

                            console.log("对象仓库 balance 初始化成功")
                        }
                }
                
            })
            

        }
    },
    add(storeName, newItem){
        let transaction = this.db.transaction(storeName, "readwrite")
        console.log("获取事务对象", transaction)
        const objectStore = transaction.objectStore(storeName)
        objectStore.add(newItem)
    }
}