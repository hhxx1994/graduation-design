// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import VueRouter from 'vue-router';
import axios from 'axios';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-default/index.css';
import App from './App';
import Index from './views/index/index';
import Table from './views/table/table';
import Form from './views/form/form';
import Recommend from './components/recommend'
import ue from './views/editor/editor';
import picture from './views/picture/picture';
import 'font-awesome/css/font-awesome.min.css';

import '../static/UE/ueditor.config.js'
import '../static/UE/ueditor.all.min.js'
import '../static/UE/lang/zh-cn/zh-cn.js'
import '../static/UE/ueditor.parse.min.js'

import login from "./views/user/login"
import regin from "./components/regin"
import choseTag from "./components/choseTag"
import Vuex from 'vuex'
import store from './vuex/store'
//Mock.mockData();
Vue.use(VueRouter);// 安装路由功能
/* eslint-disable no-new */
//Vue.use(VueRouter);
Vue.prototype.$http = axios;
Vue.use(ElementUI);
Vue.use(Vuex)

// 后端对比cookies判断是否登录，凡接口response的header带有x-auth-token的即未登录，跳转首页。
// Vue.http.interceptors.push((request, next) => {
//   request.credentials = true;
//   next((response) => {
//     let messageHeader;
//     /* global IS_PRODUCTION:true */
//     if (IS_PRODUCTION) {
//       messageHeader = "X-Auth-Token";
//     } else {
//       messageHeader = "x-auth-token";
//     }
//     if (messageHeader in response.headers.map) {
//       router.push({path: '/login'});
//     }
//     return response
//   });
// });

let routes = [
  {
    path: '/',
    component: App,
    children: [
      {path: '/index', component: Index, name: '统计图表', class: 'fa-line-chart'},
      {path: '/editor', component: ue, name: '各市房价分布图', class: 'fa-line-chart'},
      {path: '/picture', component: picture, name: '房价热力图', class: 'fa-line-chart'},
      // {path: '/table', component: Table, name: '用户地图找房', class: 'fa-line-chart'},
      // {path: '/recommend', component: Recommend, name: '用户推荐', class: 'fa-newspaper-o'},
      // {path: '/form', component: Form, name: '用户推荐2', class: 'fa-newspaper-o'}
    ]
  },
  {
    path: '/login',
    component: login,
  },
  {
    path: '/regin',
    component: regin,
  },
  {
    path: '/choseTag',
    component: choseTag,
  }
];
let router = new VueRouter({
  // 'mode': 'history', 去掉URL的#号，需要配置服务器http://router.vuejs.org/zh-cn/essentials/history-mode.html
  'linkActiveClass': 'active',
  routes
});
let app = new Vue({
  router,
  store,
}).$mount('#app');
export default app;
