<template>
  <div class="detail-bar theme-color outer-shadow font">
    <div class="detail-bar-date mark h-row-center">
      <span>下午2：30</span>
      <span>2020/8/4</span>
    </div>
    <div class="detail-bar-info">
      <div class="detail-bar-money">256</div>
      <div>支付宝</div>
      <div>工资</div>
    </div>
    <div class="detail-bar-note h-row-center">
      <span>下班后去买了一条咸鱼下班后去买了一条咸鱼下班后去买了一条咸鱼下班后去买了一条咸鱼下班后去买了一条咸鱼</span>
    </div>
  </div>
</template>

<script>
export default {
    name: 'DetailBar',
    props: {
        data: {
            type: Object
        }
    }
}
</script>

<style lang="scss" scoped>
.detail-bar {
  width: auto;
  height: 12%;
  margin: 5%;
  border-radius: 8px;
}

.detail-bar-date {
  border-radius: 8px 8px 0 0;
  justify-content: space-between;
}

.detail-bar-date,
.detail-bar-note {
  height: 25%;
  font-size: 0.5rem;
  padding: 0 12px;
  
}

.detail-bar-note {
  border-radius: 0 0 8px 8px;
  border-top: 1px dashed rgb(194, 194, 194);
  span {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
}

.detail-bar-info {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  height: 50%;
  font-size: 1rem;
  justify-items: center;
  align-items: center;
  div {
    padding: 0 5px;
  }
}

.detail-bar-money {
  font-size: 1.5rem;
  justify-self: start;
}
</style>