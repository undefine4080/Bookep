<template>
  <div class="select-box base-color radiu">
    <div class="select-title select-bar down-shadow wh-row-center theme-color">标题</div>
    <div class="select-area">
      <div class="select-item wh-row-center point">项目一</div>
    </div>
    <div class="select-btns select-bar up-shadow wh-row-center">
      <div class="select-btn wh-row-center theme-color point">取消</div>
      <div class="select-btn wh-row-center theme-color point">确定</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SelectBox'
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
}

.select-btns {
  background-color: rgb(235, 235, 235);
  border-radius: 0 0 15px 15px;
}

.select-btn {
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

.select-area {
  width: 100%;
  height: 80%;
  overflow-y: auto;
}

.select-item{
    width: 100%;
    height: 15%;
    border-bottom: 1px solid  rgb(235, 235, 235);
}
</style>