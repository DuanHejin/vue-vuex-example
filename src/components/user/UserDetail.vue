<template>
  <div>
    <el-page-header @back="$router.back()" class="detail-page-header">
      <span slot="title">Back</span>
      <span slot="content">{{mode == Modes.EDIT ? "Update User" : "Create User"}}</span>
    </el-page-header>
    <hr>
    
    <div class="form-wrap">
      <div>
        <el-form :model="form" ref="form" label-width="100px" label-position="right">
          <el-form-item label="Name" prop="name">
            <el-input prefix-icon="el-icon-user" v-model="form.name" clearable></el-input>
          </el-form-item>

          <el-form-item label="Password" prop="passoword">
            <el-input prefix-icon="el-icon-lock" v-model="form.passoword" clearable show-password></el-input>
          </el-form-item>

          <el-form-item label="Age" prop="age">
            <el-input-number v-model="form.age" :min="1" :max="100"></el-input-number>
          </el-form-item>

          <el-form-item label="Sex" prop="sex">
            <el-radio
              v-for="(item, index) in sexOptions"
              :key="index"
              v-model="form.sex"
              :label="item.value"
            >{{item.label}}</el-radio>
          </el-form-item>

          <el-form-item label="Region" prop="region">
            <el-select v-model="form.region" placeholder="Please select region">
              <el-option
                v-for="item in regionOptions"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              ></el-option>
            </el-select>
          </el-form-item>

          <el-form-item label="Favorite" prop="favorite">
            <el-checkbox
              v-for="(item, index) in favoriteOptions"
              :key="index"
              v-model="form.favorite"
              :label="item.value"
            >{{item.label}}</el-checkbox>
          </el-form-item>

          <el-form-item label="Other" prop="other">
            <el-input v-model="form.other" type="textarea" rows="3" maxlength="60" show-word-limit></el-input>
          </el-form-item>

          <el-form-item>
            <el-button v-if="mode === Modes.EDIT" type="primary" @click="onUpdate">Update</el-button>
            <el-button v-else type="primary" @click="onSubmit">Create</el-button>
            <el-button @click="reset('form')">Reset</el-button>
          </el-form-item>

        </el-form>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapMutations, mapState } from "vuex";
import { MutationTypes, Modes } from "../../constants";
import { sexOptions, favoriteOptions, regionOptions } from "./options";
import { showSuccess, showError } from '../utils';

export default {
  name: "UserDetail",
  data() {
    return {
      sexOptions,
      favoriteOptions,
      regionOptions,
      mode: Modes.INIT,
      Modes
    };
  },
  props: {},
  components: {
  },
  methods: {
    initialize: function() {
      const { mode, id } = this.$route.query || {};
      this.mode = mode;
      if (mode === Modes.EDIT || mode === Modes.READ) {
        this.getUserById(id);
      } else {
        this.initUser();
      }
    },
    onSubmit: function() {
      const resultP = this.addUser(this.form);
      resultP.then((result) => {
        showSuccess.call(this, `Add user ${result.name} successfully!`);
      }).catch((err) => {
        showError.call(this, err);
        console.log('err :>> ', err);
      });
    },
    onUpdate: function() {
      this.updateUser(this.form).then((result) => {
        showSuccess.call(this, `Update user ${result.name} successfully!`);
      }).catch((err) => {
        showError.call(this, err);
        console.log('err :>> ', err);
      });
    },
    reset: function(formName) {
      this.$refs[formName].resetFields();
    },
    ...mapActions({
      addUser: MutationTypes.ADD_USER,
      getUserById: MutationTypes.GET_USER_BY_ID,
      updateUser: MutationTypes.UPDATE_USER
    }),
    ...mapMutations({
      initUser: MutationTypes.INIT_USER
    })
  },
  mounted() {
    this.initialize();
  },
  computed: {
    ...mapState({
      form: "user",
    })
  },
  beforeRouteUpdate(to, from, next) {
    next();
    this.initialize();
  }
};
</script>

<style lang="scss">
.form-wrap {
  width: 600px;
  margin: 0 auto;
}
</style>