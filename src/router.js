import Router from 'vue-router';
import { ElementUILayout } from './views/elementUIDemo';
import { Parent } from './views/parentAndChild';
import { List, Detail, Cart } from './views/shopping';
import { UserList, UserDetail } from './views/userManage';

import Veplayer from './views/veplayer/index.vue'


const routes = [{
  path: '/', redirect: '/list'
}, {
  path: '/list', component: List, name: 'list'
}, {
  path: '/detail/:id', component: Detail, name: 'detail'
}, {
  path: '/cart', component: Cart, name: 'cart'
}, {
  path: '/elementui', component: ElementUILayout, name: 'elementui'
}, {
  path: '/userList', component: UserList, name: 'userList'
}, {
  path: '/userDetail', component: UserDetail, name: 'userDetail'
}, {
  path: '/parentAndChild', component: Parent, name: 'parentAndChild'
}, {
  path: '/veplayer', component: Veplayer, name: 'veplayer'
}, {
  path: '*', redirect: '/'
}];

export default new Router({ routes });