<template>
  <div class="wrap">
    <section class="side">
      <Side></Side>
    </section>
    <section class="chat">
      <router-view></router-view>
    </section>
    <section class="input">
      <Input></Input>
    </section>
  </div>
</template>

<script>
import Side from "../components/SideBar";
import Chat from "../components/ChatBox";
import Input from "../components/Input";
import {getInitData} from '../api/api'

export default {
  components: {
    Side,
    Chat,
    Input
  },
  created() {
     getInitData().then(res => {
        this.$store.commit('setData', res.data)
        this.$router.push({
              name: 'session',
              params: {
                  id: res.data.sessions[0].id
              }
          })
     })
  }
};
</script>

<style lang='less' scoped>
.wrap {
  position: relative;
  top: 30px;
  width: 600px;
  height: 600px;
  margin: 0 auto;
  padding-left: 200px;

  .side {
    position: absolute;
    left: 0;
    width: 200px;
    height: 100%;
    color: @color-white;
    background: #2f3640;
  }

  .chat {
    height: 450px;
    background: @color-white;
  }

  .input {
    height: 150px;
    background: #fff;
  }
}
</style>