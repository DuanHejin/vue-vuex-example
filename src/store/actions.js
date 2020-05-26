import axios from 'axios';
import {
  MutationTypes
} from '../constants';
import http from './http';


const actions = {
  [MutationTypes.GET_OBJECT_LIST]: async function (context) {
    const { data } = await axios.get('/api/object/list');
    context.commit(MutationTypes.GET_OBJECT_LIST, { objectList: data });
  },
  [MutationTypes.GET_OBJECT_BY_ID]: async function (context, id) {
    context.commit(MutationTypes.INIT_DETAIL);
    const { data } = await axios.get(`/api/object/${id}`);
    context.commit(MutationTypes.GET_OBJECT_BY_ID, { object: data });
  },
  [MutationTypes.ADD_TO_CART]: async function (context, object) {
    context.commit(MutationTypes.ADD_TO_CART, { object });
  },
};

const userActions = {
  [MutationTypes.GET_USER_LIST]: async function (context) {
    const { data } = await http.get('/api/user/list');
    context.commit(MutationTypes.GET_USER_LIST, { userList: data });
  },
  [MutationTypes.GET_USER_BY_ID]: async function (context, id) {
    const { data } = await http.get(`/api/user/${id}`);
    context.commit(MutationTypes.GET_USER_BY_ID, { user: data });
  },
  [MutationTypes.DELETE_USER]: async function (context, id) {
    const { data } = await http.deleteObj(`/api/user/${id}`);
    context.commit(MutationTypes.UPDATE_USER, { user: data });
  },
  [MutationTypes.ADD_USER]: async function (context, params) {
    const { data: { ops } } = await http.post(`/api/user/add`, params);
    const user = ops[0];
    context.commit(MutationTypes.ADD_USER, { user });
    return user;
  },
  [MutationTypes.UPDATE_USER]: async function (context, params) {
    const { data: { ops } } = await http.post(`/api/user/update`, params);
    const user = ops[0];
    context.commit(MutationTypes.UPDATE_USER, { user });
    return user;
  },
};

export default {
  ...actions,
  ...userActions
};