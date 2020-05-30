/**
 * @Author : zt
 * @Date : 2020/5/27
 * @Version : 1.0
 * @description : enter files js
 * @return :
 */
import Vue from "vue"
import App from "./App"
import router from './router'
import store from './store'

new Vue({
  el: '#app',
  render: h => h(App), /*表示 挂载点里面内容只能是组件App，类型指令v-text*/
  router,
  store,    //使用到vuex---store
})
