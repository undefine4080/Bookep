function initDB(event, dbName) {
    let db = event.target.result

    let objectStore = db.createObjectStore(dbName, {
        keyPath: 'id',
        autoIncrement: true
    })

    // 新建索引
    objectStore.createIndex('account', 'account', {
        unique: true
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

    console.log("还没有数据库，数据初始化成功", db)
}

function add(localDB, DBOpenRequest,dbName, newItem) {
    // 存储数据结果
    localDB = DBOpenRequest.result
    // 创建事务
    // let transaction = localDB.transaction(, "readwrite")
    // 打开存储对象
    // var objectStore = transaction.objectStore(dbName)
    // 添加到数据对象中
    // objectStore.add(newItem)

    localDB.transaction(dbName, "readwrite").objectStore(dbName).add(newItem)

    // 做其他事情...
    console.log('插入数据成功', localDB)
}

export { initDB, add }