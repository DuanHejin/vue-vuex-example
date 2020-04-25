<template>
  <div>
    <div v-if="objectList && objectList.length > 0">
      <div>
        <button class="btn btn-default" @click="clearCart">Clear Cart</button>
        <button class="btn btn-default" @click="checkout">Checkout</button>
      </div>
      <hr>
      <table class="table table-bordered">
        <thead>
          <tr class="info">
            <th>No</th>
            <th>Name</th>
            <th>Price</th>
            <th>Num</th>
          </tr>
        </thead>
        <tbody>
          <tr class="text-left" v-for="(obj, index) in objectList" :key="index">
            <td>{{obj.id}}</td>
            <td>{{obj.name}}</td>
            <td>{{obj.price}}</td>
            <td>{{obj.num}}</td>
          </tr>
        </tbody>
      </table>
    </div>

    <div v-else>
      There is nothing in the shopping cart.
    </div>
  </div>
</template>

<script>
import { mapMutations, mapGetters } from 'vuex';
import { MutationTypes } from '../constants';

export default {
  name: 'Cart',
  data() {
    return {
    }
  },
  methods: {
    checkout() {
      alert('Thank you for perchasing!');
      this.clearCart();
    },
    ...mapMutations({
      clearCart: MutationTypes.CLEAR_CART
    }),
  },
  mounted() {
  },
  computed: {
    ...mapGetters({
      objectList: 'optimizedCart'
    }),
  },
}
</script>