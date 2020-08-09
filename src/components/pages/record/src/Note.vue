<template>
<div class="note base-color">
    <div class="note-tip wh-row-center">请输入备注：</div>
    <div class="note-input h-row-center">
        <input id="note-input" class="theme-color inner-shadow" type="text" v-model="note" />
    </div>
</div>
</template>

<script>
export default {
    name: 'Note',
    data() {
        return {
            note: ''
        }
    },
    methods: {
        commitNote() {
            this.$store.commit('syncRecord', {
                title: 'note',
                data: this.note
            })
        }
    }
}
</script>

<style lang="scss">
.note {
    width: 70%;
    height: 12%;
}

.note-tip {
    height: 30%;
    width: 100%;
    font-size: 0.7rem;
}

.note-input {
    height: 70%;
    width: 100%;
}

#note-input {
    height: 50%;
    width: 100%;
    -webkit-appearance: none;
    -moz-appearance: none;
    font-size: 0.8rem;
    border-radius: 5px;
    border: none;
    outline: 0;
    padding: 5px 0;
}
</style>
