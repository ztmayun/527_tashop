/**
 * @Author : zt
 * @Date : 2020/5/27
 * @Version : 1.0
 * @description : 路由对象模块
 * @return :
 */
//引入
import Vue from 'vue'
import VueRouter from "vue-router"
import MSite from "../pages/MSite/MSite";
import Search from "../pages/Search/Search";
import Order from "../pages/Order/Order";
import Profile from "../pages/Profile/Profile";
import Login from "../pages/Login/Login";

//声明使用插件
Vue.use(VueRouter)

//暴露出去
export default new VueRouter({
  // 步骤一： 定义路由   步骤二：mainj.js注册  步骤三：router-link  步骤四，挖坑 路由显示区域
  routes: [
    {
      path: '/msite',
      component: MSite,
      meta: {
        showFooter: true
      }
    },
    {
      path: '/search',
      component: Search,
      meta: {
        showFooter: true
      }
    },
    {
      path: '/order',
      component: Order,
      meta: {
        showFooter: true
      }
    },
    {
      path: '/profile',
      component: Profile,
      meta: {
        showFooter: true
      }
    },
    {  /*定义默认路由 msite*/
      path: '/',
      redirect: '/msite'
    },
    {
      path: '/login',
      component: Login
    },
  ]
})
