<template>
  <div>
    <Child :myName="childName1" :count="count" @handleClick="handleClick" />
  </div>
</template>

<script>
import Child from "./Child.vue";
export default {
  name: "Parent",
  components: {
    Child,
  },
  data() {
    return {
      childName1: "test1",
      count: 0,
    };
  },
  methods: {
    handleClick(count) {
      this.count = count;
    },
  },
  mounted() {},
  computed: {},
};
</script>

<style lang="scss" scoped>
</style>