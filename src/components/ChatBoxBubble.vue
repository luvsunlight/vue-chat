<template>
  <div class="container">
    <div class="date">
      <span class="bubble-date">{{formatedDate}}</span>
    </div>
    <div class="bubble-content" :class="type">
      <img class="img" :src="img">
      <div class="text">{{content}}</div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    type: String,
    img: String,
    date: String,
    content: String
  },
  computed: {
    formatedDate() {
      return this.date.split(":")[0] + ":" + this.date.split(":")[1];
    }
  }
};
</script>

<style lang='less' scoped>
@import "../common/style/util.less";
@img-size: 30px;
@chat-width: 600px;

.container {
  margin: 10px 0;
  .date {
    margin-bottom: 5px;
  }
  .bubble-date {
    padding: 2px 15px;
    border-radius: 2px;
    color: #fff;
    background: #ccc;
    font-size: 10px;
    font-weight: bold;
  }
  .bubble-content {
    position: relative;
    .img {
      margin: 0 10px;
      width: @img-size;
      height: @img-size;
    }
    .text {
      display: inline-block;
      padding: 0 10px;
      border-radius: 5px;
      color: #000;
      line-height: 30px;
      font-size: 12px;
      text-align: left;
    }
  }
}

.guest {
  text-align: left;
  .img {
    float: left;
  }
  .text {
    .bubble-left;
    background: #fff;
  }
}

.user {
  text-align: right;
  .img {
    float: right;
  }
  .text {
    .bubble-right;
    background: #b2e281;
  }
}
</style>