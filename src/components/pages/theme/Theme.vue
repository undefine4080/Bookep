<template>
<div class="theme page font wh-col-center h-col-around" @click="$router.push('/main')">
    <div class="theme-pick radiu wh-row-center white" @click.stop="setTheme('white')">象牙白</div>
    <div class="theme-pick radiu wh-row-center black" @click.stop="setTheme('black')">石墨黑</div>
    <div class="theme-pick radiu wh-row-center blue" @click.stop="setTheme('blue')">海沫蓝</div>
    <div class="theme-pick radiu wh-row-center pink" @click.stop="setTheme('pink')">仙女粉</div>
    <div class="theme-pick radiu wh-row-center yellow" @click.stop="setTheme('yellow')">麦芽黄</div>
</div>
</template>

<script>
export default {
    name: 'Theme',
    methods: {
        setTheme(theme) {
            const links = Array.from(document.getElementsByTagName('link'))

            links.forEach(link => {
                if (link.dataset.id == theme) {
                    link.removeAttribute('disabled')
                } else {
                    link.setAttribute('disabled', true)
                }
            })

            localStorage.setItem('theme', theme)

            this.$router.push('/main')
        }
    }
}
</script>

<style lang="scss">
.theme{
    background: white;
}

.theme-pick {
    width: 60%;
    min-height: 10%;
    transition: all 0.3s;
    box-shadow: rgb(192, 192, 192) 0 0 5px;
    font-size: 1.5rem;

    &:hover {
        transform: scale(1.1);
    }
}

.white {
    color: rgb(80, 80, 80);
    background-color: #ffffff;
}

.black {
    color: #ffffff;
    background-color: rgb(80, 80, 80);
}

.blue {
    color: black;
    background-color: #b0d5df;
}

.pink {
    color: black;
    background-color: #eed5db;
}

.yellow {
    color: black;
    background-color: #f9d27d;
}
</style>
