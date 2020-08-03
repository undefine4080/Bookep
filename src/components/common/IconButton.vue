<template>
  <div class="icon-button" @click="$emit('handle')">
    <div :class="`btn icon-${data.icon}`" @click="to"></div>
  </div>
</template>

<script>
export default {
  name: 'IconButton',
  props: {
    data: {
      type: Object
    }
  },
  methods: {
      to(){
          if(this.data.route){
              this.$router.push(data.route)
          }else{
              return
          }
      }
  }
}
</script>

<style lang="scss">
.icon-button {
  width: 8%;
  height: 60%;
  display: block;
  box-sizing: border-box;
  margin: auto 3%;
}

.btn {
  width: 100%;
  height: 100%;
  display: block;
  box-sizing: border-box;
  background: {
    size: contain;
    position: center;
    repeat: no-repeat;
    clip: content-box;
  }
}

.icon-account {
  background-image: url('../../../static/iconFont/account.png');
}

.icon-back {
  background-image: url('../../../static/iconFont/back.png');
}

.icon-confirm {
  background-image: url('../../../static/iconFont/confirm.png');
}

.icon-sequence {
  background-image: url('../../../static/iconFont/sequence.png');
}

.icon-setting {
  background-image: url('../../../static/iconFont/setting.png');
}

.icon-theme {
  background-image: url('../../../static/iconFont/theme.png');
}

.icon-time {
  background-image: url('../../../static/iconFont/time.png');
}

.icon-edit {
  background-image: url('../../../static/iconFont/edit.png');
}
</style>