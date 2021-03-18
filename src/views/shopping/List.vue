<template>
  <div>
    <table class="table table-bordered table-hover table-vertical-middle">
      <thead>
        <tr class="info">
          <th>No</th>
          <th>Name</th>
          <th>Price</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        <tr class="text-left" v-for="(obj, index) in objectList" :key="index">
          <td>{{obj.id}}</td>
          <td>
            <router-link :to="'/detail/' + obj.id" append>{{obj.name}}</router-link>
          </td>
          <td>{{obj.price}}</td>
          <td>
            <button class="btn btn-default" @click="onClickAdd(obj)">Add to Cart</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { mapActions, mapState, mapMutations } from "vuex";
import { MutationTypes } from "../../constants";

export default {
  name: "List",
  data() {
    return {
      
    };
  },
  methods: {
    ...mapActions({
      getObjList: MutationTypes.GET_OBJECT_LIST,
      addToCart: MutationTypes.ADD_TO_CART,
    }),
    ...mapMutations({
    }),
    successNotification() {
      this.$notify({
        title: 'Successfully',
        message: 'Add to cart successfully!',
        type: 'success',
      });
    },
    onClickAdd(object) {
      this.addToCart(object).then(() => {
        this.successNotification();
      }).catch((err) => {
        console.log('err :>> ', err);
      });
    }
  },
  mounted() {
    this.getObjList();
  },
  computed: {
    ...mapState([
      'objectList'
    ])
  },
};
</script>