<template>
  <div class="detail-bar theme-color outer-shadow font">
    <div class="detail-bar-date mark h-row-center">
      <span>{{time}}</span>
      <span>{{date}}</span>
    </div>
    <div class="detail-bar-info">
      <div class="detail-bar-money">{{data.amount}}</div>
      <div>{{data.account}}</div>
      <div>{{data.use || data.origin}}</div>
    </div>
    <div class="detail-bar-note h-row-center">
      <span>{{data.note}}</span>
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
    },
    computed: {
      time(){
        return this.data.time.toLocaleString().slice(10, 20)
      },
      date(){
        return this.data.time.toLocaleString().slice(0, 9)
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
  min-height: 25%;
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