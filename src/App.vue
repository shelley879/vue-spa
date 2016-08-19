<template>
  <div class="container">
    <Multiselect
      :selected="selected"
      :options="options"
      :searchable="true"
      select-label="点击选择"
      deselect-Label="点击移出"
      selected-label="已选中"
      label="title"
      key="search"
      placeholder="选择国家"
      @update="updateSelected">
    </Multiselect>
    <p>{{selected | json}}</p>
    <a v-link="{ path: '/' }">Go to Fooggg</a>
    <a v-link="{ path: '/bar' }">Go to Bar</a>
    <router-view></router-view>
  </div>
</template>

<script>
import Multiselect from 'vue-multiselect';

const searchOption = [
      {
        title : 'aa',
        search : '11',
      },
      {
        title : 'bb',
        search : '22',
      },
      {
        title : 'cc',
        search : '33',
      },
      {
        title : 'dd',
        search : '44',
      },
      {
        title : 'ee',
        search : '55',
      },
      ];

export default {
  components: {
    Multiselect,
  },
  replace: false,
  data() {
    return {
      selected: null,
      options: searchOption,
      dataResult : null,
    };
  },
  methods: {
    updateSelected(newSelected) {
      this.selected = newSelected;
    }
  }
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
