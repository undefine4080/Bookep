request.onupgradeneeded = function (event) {
    let db = event.target.result

    if (!db.objectStoreNames.contains('record')) {
        let objectStore = db.createObjectStore('record', {
            autoIncrement: true
        })

        self.defaultRecordIndex.forEach((index) => {
            objectStore.createIndex(index, index, {
                unique: false
            })
        })

        console.log("对象仓库 record 初始化成功")
    }

    if (!db.objectStoreNames.contains('balance')) {
        let objectStore = db.createObjectStore('balance', {
            autoIncrement: true
        })

        objectStore.createIndex('account', 'account', {
            unique: true,
        })
        objectStore.createIndex('volume', 'volume', {
            unique: false
        })

        objectStore.transaction.oncomplete = function (event) {
            let customerObjectStore = db.transaction(['balance'], "readwrite").objectStore('balance')
            self.defaultOSData[0].defaultData.forEach(function (item) {
                let request = customerObjectStore.add(item)
                request.onsuccess = function () {
                    console.log('创建 Balance 初始数据')
                }
            })
        }

        console.log("对象仓库 balance 初始化成功")
    }

    if (!db.objectStoreNames.contains('way')) {
        let objectStore = db.createObjectStore('way', {
            autoIncrement: true
        })

        objectStore.createIndex('origin', 'origin', {
            unique: true
        })
        objectStore.createIndex('use', 'use', {
            unique: true
        })

        objectStore.transaction.oncomplete = function (event) {
            let customerObjectStore = db.transaction(['way'], "readwrite").objectStore('way')

            let request = customerObjectStore.add(self.defaultOSData[1].defaultData)
            request.onsuccess = function () {
                console.log('创建 Way 初始数据')
            }
        }

        console.log("对象仓库 way 初始化成功")
    }
}