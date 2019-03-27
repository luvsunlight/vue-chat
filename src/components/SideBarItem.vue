<template>
  <div class="item" :class="{ active: id === $route.params.id }" @click="selectSession">
    <img :src="img" class="item-img">
    <div class="item-text">{{ name }}</div>
  </div>
</template>

<script>
export default {
  props: {
    img: String,
    name: String,
    id: {
      type: String,
      default: ""
    }
  },
  methods: {
    selectSession() {
      this.$emit("select", this.id);
    }
  }
};
</script>

<style lang='less' scoped>
.item {
  position: relative;
  padding-left: 70px;
  margin: 10px;
  height: 50px;
  text-align: left;
  font-weight: bold;

  &:hover {
    background-color: rgba(255, 255, 255, 0.03);
  }
  &.active {
    background-color: rgba(255, 255, 255, 0.1);
  }

  .item-img {
    position: absolute;
    left: 0;
    width: 50px;
    height: 50px;
  }

  .item-text {
    height: 50px;
    line-height: 50px;
  }
}
</style>