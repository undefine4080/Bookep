<template>
  <div class="select-box base-color radiu">
    <div class="select-title select-bar down-shadow wh-row-center theme-color">{{selectBoxTitle}}</div>
    <div class="select-area">
      <div
        class="select-item wh-row-center base-color point"
        v-for="(item, index) in data.dataSource"
        :key="index"
        @click.stop="commitData(item)"
      >{{item}}</div>
    </div>
    <div
      class="select-btn select-bar up-shadow wh-row-center point theme-color"
      @click="$store.commit('closePopBox')"
    >取消</div>
  </div>
</template>

<script>
export default {
    name: 'SelectBox',
    props: {
        data: {
            type: Object
        }
    },
    methods: {
        commitData(item) {
           this.$store.commit('syncRecord', {
                    title: this.data.whichBox,
                    data: item
                })

            this.$store.commit('closeRecordPopBox')
        }
    },
    computed: {
        selectBoxTitle() {
            if (this.data.whichBox == 'use') {
                return '用途'
            } else if (this.data.whichBox == 'origin') {
                return '来源'
            }else{
                return '账户'
            }
        }
    }
}
</script>

<style lang="scss">
.select-box {
  width: 60%;
  height: 45%;
}

.select-bar {
  height: 10%;
  width: 100%;
}

.select-title {
  border-radius: 15px 15px 0 0;
  position: relative;
  z-index: 100;
}

.select-btn {
  width: 100%;
  border-radius: 0 0 15px 15px;
  position: relative;
  z-index: 999
}

.select-area {
  width: 100%;
  height: 80%;
  overflow-y: auto;
  box-sizing: border-box;
  scrollbar-width: none;
  &::-webkit-scrollbar{
    width: 0;
  }
}

.select-item {
  width: 100%;
  height: 15%;
}
</style>
