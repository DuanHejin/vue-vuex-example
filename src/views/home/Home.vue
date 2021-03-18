<template>
  <el-container>
    <el-header class="header">
      <Header></Header>
    </el-header>

    <el-container>
      <el-aside class="nav-wrapper">
        <Nav></Nav>
      </el-aside>

      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import { Nav, Header } from "../../components/home";

export default {
  name: "Home",
  components: {
    Nav,
    Header,
  },
};
</script>

<style lang="scss" scoped>
$headerHeight: 60px;

.header {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  height: $headerHeight;
  border-bottom: 1px solid #dcdfe6;
}

.nav-wrapper {
  width: 300px;
  min-height: calc(100vh - #{$headerHeight});
  border-right: 1px solid #dcdfe6;
}
</style>