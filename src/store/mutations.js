/**
 * @Author : zt
 * @Date : 2020/5/27
 * @Version : 1.0
 * @description : 直接更新state的对象
 * @return :
 */
import Vue from 'vue'
import {
  RECEIVE_ADDRESS,
} from './mutation-types'

export default {
  [RECEIVE_ADDRESS](state, {address}) {
    state.address = address
  }
}
