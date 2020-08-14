<template>
  <div class="confirm-box theme-color radiu font">
    <div class="confirm-title down-shadow wh-row-center">提示</div>
    <div class="confirm-text wh-row-center">确认要删除“{{data.target}}“？</div>
    <div class="confirm-btns wh-row-center up-shadow">
      <div class="confirm-btn wh-row-center point theme-color" @click="closeConfirm">取消</div>
      <div class="confirm-btn wh-row-center point theme-color" @click="confirm(data)">确认</div>
    </div>
  </div>
</template>

<script>
export default {
    name: 'ConfirmBox',
    props: ['data'],
    methods: {
      confirm(data){
        this.$emit('handle', this.data)
        this.$store.commit('closeSettingPopBox')
      },
      closeConfirm(){
        this.$store.commit('closeSettingPopBox')
      }
    }
}
</script>

<style lang="scss">
.confirm-box {
  width: 60%;
  height: 30%;
}

.confirm-title {
  height: 15%;
  width: 100%;
  border-radius: 15px 15px 0 0;
  position: relative;
  z-index: 100;
}

.confirm-text {
  width: 100%;
  height: 70%;
  padding: 10%;
  box-sizing: border-box;
}

.confirm-btns {
  width: 100%;
  height: 15%;
  border-radius: 0 0 15px 15px;
  background-color: rgb(241, 241, 241);
}

.confirm-btn {
  width: 50%;
  height: 100%;
  &:first-child {
    border-radius: 0 0 0 15px;
    margin-right: 1px;
  }
  &:last-child {
    border-radius: 0 0 15px 0;
  }
}
</style>