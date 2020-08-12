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
    mounted() {
        this.$store.commit('initBaseData')
        DB.openDB()
    }
}
</script>
