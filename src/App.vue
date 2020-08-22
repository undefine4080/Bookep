<template>
<div id="app" class="page">
    <transition name="fade">
        <router-view />
    </transition>
</div>
</template>

<script>
import DB from '../src/api/db.js'

export default {
    name: 'App',
    beforeCreate(){
        const links = document.getElementsByTagName('link')
        console.log(links)

        let curTheme = ""

        if(!localStorage.getItem('theme')){
            localStorage.setItem('theme', "white")
        }else{
            curTheme = localStorage.getItem('theme')
        }
    },
    mounted() {
        this.$store.commit('initBaseData')
        DB.openDB()
    }
}
</script>
