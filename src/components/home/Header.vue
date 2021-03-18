<template>
  <div class="header-btn-wrap">
    <div v-if="isLogged">
      <transition name="el-zoom-in-center">
        <div>
          <label>Welcome Admin!</label>
          <el-button size="medium" type="text" round icon="el-icon-user-solid" @click="onClickLogout">Logout</el-button>

        </div>
      </transition>
    </div>
    <div v-else>
      <transition>
        <div>
          <label>Please login first.</label>
          <el-button size="medium" type="text" icon="el-icon-user" @click="onClickLogin">Login</el-button>
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
import { login, logout, isLoggedIn } from "../../services/AuthService";

export default {
  name: "Header",
  data() {
    return {
      isLogged: false
    };
  },
  methods: {
    onClickLogin: function() {
      this.isLogged = login();
    },
    onClickLogout: function() {
      this.isLogged = logout();
    },
    checkIsLoggedIn: function() {
      this.isLogged = isLoggedIn();
    }
  },
  mounted() {
    this.checkIsLoggedIn();
  }
};
</script>

<style lang="scss" scoped>
.header-btn-wrap {
  margin-right: 20px;

  label + button {
    margin-left: 10px;
  }
}
</style>