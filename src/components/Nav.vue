<template>
  <div>
    <ul class="nav nav-tab nav-stacked">
      <li v-for="(link, index) in links" :key="index">
        <router-link active-class="red" :to="link.to">{{link.label}}</router-link>
      </li>
    </ul>
  </div>
</template>


<script>
export default {
  name: "Home",
  data() {
    return {
      links: []
    };
  },
  mounted() {
    this.links = [
      {
        label: "List page",
        to: "/list"
      },
      {
        label: "Shopping Cart",
        to: "/cart"
      },
    ];
  }
};
</script>