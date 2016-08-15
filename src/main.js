import Vue from 'vue'; // 引入vue
import Router from 'vue-router'; // 引入vue-router

import App from './App'; // 引入根组件
import routerMap from './router'; // 引入路由表

Vue.use(Router); // 声明使用vue-router
const router = new Router(); // 创建路由
routerMap(router); // 路由表引入

router.start(App, '#root'); // 开启应用
