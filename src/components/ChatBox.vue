<template>
  <div class="chat-box" v-scroll-bottom>
    <Bubble
      v-for="message in messages"
      :key="message.id"
      :type="message.type"
      :img="$store.state.user.img"
      :date="message.date"
      :content="message.content"
    ></Bubble>
  </div>
</template>

<script>
import Bubble from "./ChatBoxBubble";
export default {
  components: {
    Bubble
  },
  directives: {
    scrollBottom : {
      componentUpdated(el) {
        el.scrollTop = el.scrollHeight - el.clientHeight;
      }
    }
  },
  data() {
    return {
      id: "",
      messages: []
    };
  },
  watch: {
    "$route.params.id"(id) {
      this.id = id;
      this.$store.commit("selectSession", id);
      this.messages = this.$store.getters.getSession(id).messages;
    }
  }
};
</script>

<style lang='less' scoped>
.chat-box {
  height: 100%;
  overflow: auto;
}
</style>