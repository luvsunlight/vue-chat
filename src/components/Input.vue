<template>
  <textarea
    v-focus
    type="text"
    class="input"
    placeholder="按Ctrl和Enter发送消息"
    v-model="text"
    @keyup.enter.ctrl="sendMsg"
  ></textarea>
</template>

<script>
import {updateMessage} from '../api/api'
export default {
  directives: {
    focus: {
      inserted: el => el.focus()
    }
  },
  data() {
    return {
      text: ""
    };
  },
  methods: {
    sendMsg() {
      if (this.text) {
        this.$store.commit("sendMessage", {content:this.text});
        updateMessage(this.$store)
        this.text = "";
      }
    }
  }
};
</script>

<style lang='less' scoped>
.input {
  padding: 10px;
  width: 100%;
  height: 100%;
  border: none;
  outline: none;
  resize: none;
  box-sizing: border-box;
}
</style>