import { MutationTypes } from '../constants';

const mutations = {
  [MutationTypes.GET_OBJECT_LIST]: function(state, {objectList}) {
    state.objectList = objectList;
  },
  [MutationTypes.GET_OBJECT_BY_ID]: function(state, {object}) {
    state.object = object;
    state.isLoading = false;
  },
  [MutationTypes.ADD_TO_CART]: function(state, object) {
    state.cart.push(object);
  },
  [MutationTypes.CLEAR_CART]: function(state) {
    state.cart = [];
  },
  [MutationTypes.INIT_DETAIL]: function(state) {
    state.isLoading = true;
    state.object = null;
  },
}

export default mutations;