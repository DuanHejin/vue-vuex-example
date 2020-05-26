import { MutationTypes, CommonTypes } from '../constants';
import { cloneDeep } from 'lodash';

const commonMutations = {
  [CommonTypes.TOGGLE_LOADING]: function (state) {
    state.isLoading = !state.isLoading;
  }
};

const mutations = {
  [MutationTypes.GET_OBJECT_LIST]: function (state, { objectList }) {
    state.objectList = objectList;
  },
  [MutationTypes.GET_OBJECT_BY_ID]: function (state, { object }) {
    state.object = object;
    state.isLoading = false;
  },
  [MutationTypes.ADD_TO_CART]: function (state, { object}) {
    state.cart.push(object);
  },
  [MutationTypes.CLEAR_CART]: function (state) {
    state.cart = [];
  },
  [MutationTypes.INIT_DETAIL]: function (state) {
    state.isLoading = true;
    state.object = null;
  },
}

const baseUser = {
  name: '',
  passoword: '',
  age: 1,
  sex: '',
  favorite: [],
  other: '',
}

const userMutations = {
  [MutationTypes.INIT_USER]: function (state) {
    state.user = cloneDeep(baseUser);
  },
  [MutationTypes.GET_USER_LIST]: function (state, { userList }) {
    state.userList = userList;
  },
  [MutationTypes.GET_USER_BY_ID]: function (state, { user }) {
    state.user = user;
  },
  [MutationTypes.ADD_USER]: function (state, { user }) {
    state.user = user;
  },
  [MutationTypes.UPDATE_USER]: function (state, { user }) {
    state.user = user;
  },
};

export default {
  ...commonMutations,
  ...mutations,
  ...userMutations
};