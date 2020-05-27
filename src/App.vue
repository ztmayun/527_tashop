<template>
  <!--组件 模板中所有的元素必须被一个根元素包裹起来，否则出错-->
  <div id="app">
    <router-view></router-view>
    <footer-guide v-if="$route.meta.showFooter"></footer-guide>
    <!--$route.meta.showFooter
    $route表示当前路由，在路由可以配置meta元数据，
    而当前路由可以获取配置的属性即可以获取meta
    -->
  </div>
</template>

<script>
  import FooterGuide from "./components/FooterGuide/FooterGuide";

  export default {
    name: "App",
    components: {
      'footer-guide': FooterGuide
    }

  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  #app
    width 100%
    height 100%
    background #f5f5f5
    position relative
</style>
