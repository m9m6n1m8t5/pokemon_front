<template>
  <div id="app">
    <header class="d-flex justify-content-center align-items-center">
      <font color="white" size=7>ポケモンえいごクイズ</font>
    </header>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-color: cornsilk;
  min-height: 100vh;
}
header {
  display: flex;
  width: 100%;
  height: 100px;
  background-color:crimson;
  align-items: center;
  margin-bottom: 30px;
  border-bottom: 5px solid gray;
}
</style>
