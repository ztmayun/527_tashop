/**
 * @Author : zt
 * @Date : 2020/5/27
 * @Version : 1.0
 * @description : 通过mutations间接更新state的对象
 * @return :
 */

import {
  RECEIVE_ADDRESS,
} from './mutation-types'
import {
  reqAddress1
} from '../api'

export default {
  // 异步获取地址
  async getAddress({commit}) {
    // 发送异步ajax请求
   const result = await reqAddress1()
    // 提交一个mutation
    if (result.code === 0) {
      const address = result.data
      commit(RECEIVE_ADDRESS, {address})
    }
  }
}
