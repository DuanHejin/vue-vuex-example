<template>
  <div>
    <!-- <div>
      <button class="btn btn-default" @click="goBack">Back</button>
      <button class="btn btn-default" :disabled="!object" @click="addToCart(object)">Add To Cart</button>
    </div> -->
    <div>
      <el-page-header @back="goBack" class="detail-page-header">
        <span slot="title">
          Back
        </span>
        <span slot="content">
          <button class="btn btn-default" :disabled="!object" @click="onClickAdd(object)">Add To Cart</button>
        </span>
      </el-page-header>

    </div>
    <hr>
    <pre>{{object}}</pre>
    <div v-if="!isLoading && object">
      <form class="form form-horizontal">
        <div class="form-group">
          <label for="" class="control-label col-md-3">ID</label>
          <div class="col-md-6">
            <input class="form-control" type="text" v-model="object.id" readonly>
          </div>
        </div>

        <div class="form-group">
          <label for="" class="control-label col-md-3">Name</label>
          <div class="col-md-6">
            <input class="form-control" type="text" v-model="object.name" readonly>
          </div>
        </div>

        <div class="form-group">
          <label for="" class="control-label col-md-3">price</label>
          <div class="col-md-6">
            <input type="text" class="form-control" v-model="object.price" readonly>
          </div>
        </div>

        <div class="form-group">
          <label for="" class="control-label col-md-3">Publish Year</label>
          <div class="col-md-6">
            <input type="text" class="form-control" v-model="object.publishYear" readonly>
          </div>
        </div>
      </form>
    </div>

    <div v-else>
      <Loading></Loading>
    </div>
  </div>
</template>

<script>
import { Loading } from '../../components/common';
import { mapState, mapMutations, mapActions } from 'vuex';
import { MutationTypes } from '../../constants';

export default {
  name: 'Detail',
  data() {
    return {
      objId: null,
    }
  },
  components: {
    Loading
  },
  methods: {
    initialize: function() {
      this.objId = this.$route.params.id;
      this.getObj(this.objId);
    },
    goBack: function () {
      this.$router.push('/list');
    },
    goTo: function (id) {
      this.$router.push({name: 'detail', params: {id}});
    },
    onClickAdd: function (object) {
      this.addToCart(object).then(() => {
        this.successNotification();
      });
    },
    ...mapActions({
      getObj: MutationTypes.GET_OBJECT_BY_ID,
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
  },
  computed: {
    ...mapState([
      'object',
      'isLoading',
    ]),
  },
  mounted() {
    this.initialize();
  },
  beforeRouteUpdate(to, from, next) {
    next();
    this.initialize();
  },
}
</script>

<style lang="scss">
.detail-page-header {
  align-items: center;
}
</style>