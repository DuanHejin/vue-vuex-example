<template>
  <div>
    <el-table :data="userList" border stripe height="550" style="width: 100%">
      <el-table-column label="Name" :width="200">
        <template slot-scope="scope">
          <router-link :to="`/userDetail?mode=EDIT&id=${scope.row._id}`">{{scope.row.name}}</router-link>
        </template>
      </el-table-column>

      <el-table-column
        v-for="col in columns"
        :prop="col.id"
        :key="col.id"
        :label="col.label"
        :width="col.width"
      ></el-table-column>

      <el-table-column label="Action" :width="200">
        <template slot-scope="scope">
          <el-button type="danger" size="small" @click="onDelete(scope.row)">Delete</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import { 
  // mapState,
   mapActions, mapGetters } from "vuex";
import { MutationTypes } from "../../constants";
import { showSuccess, showError } from '../../utils/index';

export default {
  name: "UserList",
  data() {
    return {
      columns: [
        {
          id: "sex",
          label: "Sex",
          width: "200"
        },
        {
          id: "age",
          label: "Age",
          width: "200"
        },
        {
          id: "region",
          label: "Region",
          width: "200"
        }
      ]
    };
  },
  methods: {
    initialize: function() {
      this.getUserList();
    },
    onDelete: function({name, _id: id}) {
      this.$confirm(
        `Are you sure you want to continue?<br/> Delete user <b>${name}</b>, id: <b>${id}</b>`,
        "Confirm Delete User",
        { type: "warning", dangerouslyUseHTMLString: true }
      ).then(() => {
        this.deleteUser(id).then(() => {
          showSuccess.call(this, 'Delete user successfully!');
          this.getUserList();
        }).catch(() => {
          showError.call(this, 'Delete user failed!')
        });
      }).catch(() => {});
    },
    ...mapActions({
      getUserList: MutationTypes.GET_USER_LIST,
      deleteUser: MutationTypes.DELETE_USER
    })
  },
  mounted() {
    this.initialize();
  },
  computed: {
    // ...mapState(["userList"]),
    ...mapGetters({
      userList: 'sortedUserList'
    }),
  }
};
</script>

<style lang="scss" scoped>
</style>