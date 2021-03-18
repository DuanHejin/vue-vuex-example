<template>
  <div class="container container-wrap">
    <div class="form-group">
      <h3>ChildName: {{ myName }}</h3>
    </div>

    <div class="form">
      <div class="form-group">
        <button class="btn btn-default btn-sm" @click="onClick">点我</button>
        <span class="control-label">  {{ count }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Child",
  props: {
    myName: String,
    count: Number,
    handleClick: Function,
  },
  data() {
    return {};
  },
  methods: {
    onClick() {
      this.$emit("handleClick", this.count + 1);
    },
  },
  mounted() {},
  computed: {},
};
</script>

<style lang="scss" scoped>
.container-wrap {
  background-color: #f9f9f9;
}
</style>