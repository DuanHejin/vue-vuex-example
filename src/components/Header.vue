<template>
  <div class="header-btn-wrap">
    <transition>
      <div v-if="isLogged">
        <label>Welcome Admin!</label>
        <button class="btn btn-default" @click="onClickLogout">Logout</button>
      </div>
      <div v-else>
        <label>Please login first.</label>
        <button class="btn btn-default" @click="onClickLogin">Login</button>
      </div>
    </transition>
  </div>
</template>

<script>
import { login, logout, isLoggedIn } from '../services/AuthService';

export default {
  name: 'Header',
  data() {
    return {
      isLogged: false
    }
  },
  methods: {
    onClickLogin: function () {
      this.isLogged = login();
    },
    onClickLogout: function () {
      this.isLogged = logout();
    },
    checkIsLoggedIn: function () {
      this.isLogged = isLoggedIn();
    }
  },
  mounted() {
    this.checkIsLoggedIn();
  },
}
</script>

<style lang="scss" scoped>
  .header-btn-wrap {
    margin-right: 20px;

    label + button {
      margin-left: 10px;
    }
  }
</style>