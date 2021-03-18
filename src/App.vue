<template>
  <div id="app" v-loading="isLoading">
    <Home />
  </div>
</template>

<script>
import { Home } from "./views/home";
import { mapState } from "vuex";

export default {
  name: "App",
  components: {
    Home,
  },
  computed: {
    ...mapState(["isLoading"]),
  },
};
</script>

<style>
#app {
  font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB",
    "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

button + button {
  margin-left: 10px;
}

table.table-vertical-middle > tbody > tr > td {
  vertical-align: middle;
}
</style>
