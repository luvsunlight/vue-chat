<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
* {
  margin: 0;
}

body, html {
  height: 100%;
}

#app {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  color: #2c3e50;
  background-image: url('./assets/bg.jpg');
  background-size: 100% 100%;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
</style>
