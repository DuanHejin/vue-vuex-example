import Router from 'vue-router';
import {
  List,
  Detail,
  Cart,
} from './components';

const routes = [{
  path: '/', redirect: '/list'
}, {
  path: '/list', component: List, name: 'list'
}, {
  path: '/detail/:id', component: Detail, name: 'detail'
}, {
  path: '/cart', component: Cart, name: 'cart'
}, {
  path: '*', redirect: '/'
}];

export default new Router({routes});