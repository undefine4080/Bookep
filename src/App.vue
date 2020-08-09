<template>
<div id="app" class="page">
    <transition name="fade">
        <router-view />
    </transition>
</div>
</template>

<script>
import {
    initDB,
    add
} from '../src/api/db.js'

export default {
    name: 'App',
    mounted() {
        // 数据库数据结果
        let localDB
        // 数据库名称
        let dbName = 'record' 
        // 数据库版本
        let dbVersion = 1
        // 打开数据库
        let DBOpenRequest = window.indexedDB.open(dbName, dbVersion)

        // 下面事情执行于：数据库首次创建版本，或者window.indexedDB.open传递的新版本（版本数值要比现在的高）
        DBOpenRequest.onupgradeneeded = function (event) {
            initDB(event, dbName)
        }

        // 数据库打开成功后
        DBOpenRequest.onsuccess = function (event) {
            localDB = event.target.result

            console.log(localDB)

            //add(localDB, DBOpenRequest, dbName, newItem)
        }
    }
}
</script>
