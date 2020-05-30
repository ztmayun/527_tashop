/**
 * @Author : zt
 * @Date : 2020/5/27
 * @Version : 1.0
 * @description : 包含n个接口的请求 模块
 * @return :
 */
import ajax from './ajax'

/*在config/index.js proxyTable设置代理请求 实现跨域*/
const BASE_URL = '/api';
//1、根据经纬度获取位置详情
export const reqAddress = (geohash) => ajax('/position/$(geohash)')
export const reqAddress1 = () => ajax(BASE_URL+'/address_data.json')

//2、获取食品分类列表
export const reqFoodTypes = () => ajax('/index_category')
//3、根据经纬度获取商铺列表
export const reqShopLists = (latitude, longitude) => ajax('/shops', {latitude, longitude})
//4、根据经纬度和关键字搜索商铺列表
export const reqShops = (geohash, keyword) => ajax('/search_shops', {geohash, keyword})
//5、获取一次性验证码
export const reqCaptcha = () => ajax('/captcha')
//6、用户名密码登陆
export const reqLogin = (name, pwd) => ajax('/login_pwd', {name, pwd}, 'POST')
//7、发送短信验证码
export const reqSendCode = (phone) => ajax('/sendcode', {phone})
//8、手机号验证码登陆
export const reqLoginSms = (phone, code) => ajax('/login_sms', {phone, code}, 'POST')
//9、根据会话获取用户信息
export const reqUserInfo = () => ajax('/userinfo')
//10、用户登出
export const reqLoginOut = () => ajax('/logout')

export const reqLoginOut1 = function () {
  alert("测试1...");
}
