<template>
  <div>
    <div class="header">
      <Header></Header>
    </div>

    <div class="wrapper">
      <div class="nav-wrapper">
        <Nav></Nav>
      </div>

      <div class="main container">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
import Nav from "./Nav";
import Header from "./Header";

export default {
  name: "Home",
  components: {
    Nav,
    Header
  }
};
</script>

<style lang="scss" scoped>
$headerHeight: 60px;

.header {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  height: $headerHeight;
  border-bottom: 1px solid #ccc;
}

.wrapper {
  display: flex;

  .nav-wrapper {
    width: 300px;
    min-height: calc(100vh - #{$headerHeight});
    border-right: 1px solid #cccccc;
  }
  .main {
    flex: 1;
    margin-top: 20px;
  }
}
</style>