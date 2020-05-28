/**
 * @Author : zt
 * @Date : 2020/5/27
 * @Version : 1.0
 * @description : vuex最核心的管理对象store
 * @return :
 */
import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
import mutations from './mutations'
import actions from './actions'
import getters from './getters'

Vue.use(Vuex)

export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters
})

