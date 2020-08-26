<template>
<div id="app" class="page context">
    <transition name="pop">
        <router-view />
    </transition>
</div>
</template>

<script>
import DB from '../src/api/db.js'

export default {
    name: 'App',
    beforeCreate() {
        const lastTheme = localStorage.getItem('theme')

        if (lastTheme) {
            const links = Array.from(document.getElementsByTagName('link'))
            links.forEach(link => {
                if (link.dataset.id == lastTheme) {
                    link.removeAttribute('disabled')
                } else {
                    link.setAttribute('disabled', true)
                }
            })
        } else {
            localStorage.setItem('theme', 'white')
        }
    },
    mounted() {
        this.$store.commit('initBaseData')
        DB.openDB()
    }
}
</script>
