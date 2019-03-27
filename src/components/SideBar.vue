<template>
  <div class="container">
    <div class="user">
      <Item :img="user.img" :name="user.name"></Item>
    </div>
    <div class="slider">Friends</div>
    <ul class="guest-list">
      <li
        is="Item"
        v-for="session in sessions"
        :key="session.id"
        :img="session.user.img"
        :name="session.user.name"
        :id="session.id"
        @select="selectSession"
      ></li>
    </ul>
  </div>
</template>

<script>
import Item from "./SideBarItem";
import { mapState } from "vuex";

export default {
  components: { Item },
  computed: {
    ...mapState(["user", "sessions"])
  },
  methods: {
    selectSession(id) {
      this.$router.push({
        name: "session",
        params: {
          id: id
        }
      });
    }
  }
};
</script>

<style lang='less' scoped>
.user {
  margin-bottom: 50px;
}
.slider {
  text-align: left;
  text-indent: 0.5em;
  font-size: 20px;
}
.guest-list {
  padding: 0;
  list-style: none;
}
</style>