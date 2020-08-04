<template>
  <div class="note">
    <div class="note-tip wh-row-center">请输入备注：</div>
    <div class="note-input h-row-center">
      <input id="note-input" class="color inner-shadow" type="text" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'Note'
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