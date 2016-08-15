<template>
  <div class="container">
    <a v-link="{ path: '/' }">Go to Fooggg</a>
    <a v-link="{ path: '/bar' }">Go to Bar</a>
    <router-view></router-view>
  </div>
</template>

<script>

export default {
    replace: false,
};
</script>

<style lang='scss'>
$icon-font-path: "~bootstrap-sass/assets/fonts/bootstrap/";
@import "~bootstrap-sass/assets/stylesheets/bootstrap";

html {
  height: 100%;
}

body {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
}

#app {
  color: #2c3e50;
  margin-top: -100px;
  max-width: 600px;
  font-family: Source Sans Pro, Helvetica, sans-serif;
  text-align: center;
}

#app a {
  color: #42b983;
  text-decoration: none;
}

.logo {
  width: 100px;
  height: 100px
}
</style>
