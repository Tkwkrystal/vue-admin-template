<template>
  <el-breadcrumb class="app-breadcrumb" separator="/">
    <!--在实现列表过渡时，如果需要过渡的元素是通过v-for渲染出来的，不能使用
           transition 包裹，需要使用 transition-group -->
    <!--若需要为 v-for 循环创建的元素设置动画，必须为每一个元素设置 :key 属性-->
    <!--作者：tkw-->
    <transition-group name="breadcrumb">
      <el-breadcrumb-item v-for="(item,index) in levelList" v-if="item.meta.title" :key="item.path">
        <span v-if="item.redirect==='noredirect'||index==levelList.length-1" class="no-redirect">{{ item.meta.title }}</span>
        <router-link v-else :to="item.redirect||item.path">{{ item.meta.title }}</router-link>
      </el-breadcrumb-item>
    </transition-group>
  </el-breadcrumb>
</template>

<script>
import pathToRegexp from 'path-to-regexp'  //  url 字符串的正则表达式。

export default {
  data() {
    return {
      levelList: null
    }
  },
  watch: {
    $route() {
      this.getBreadcrumb()
    }
  },
  created() {
    this.getBreadcrumb()
  },
  methods: {
    // ex: http://localhost:9528/#/nested/menu1
    getBreadcrumb() {
      const { params } = this.$route
      // this.$route.matched  数组，包含当前匹配的路径中所包含的所有片段所对应的配置参数对象。
      let matched = this.$route.matched.filter(item => {
        // console.log('item.name'+item.name);//  ex: Nested  ;Menu1
        if (item.name) {
          // Breadcrumb not support params
          // var url = '/user/:id/:name'
          // var data = {id: 10001, name: 'bob'}
          // console.log(pathToRegexp.compile(url)(data))
          // 打印结果：/user/10001/bob
          // To solve this problem https://github.com/PanJiaChen/vue-element-admin/issues/561
          var toPath = pathToRegexp.compile(item.path)
          item.path = toPath(params)
          // console.log('item.path: '+item.path); //    ex: /nested ;/nested/menu1
          return true
        }
      })
      const first = matched[0]
      if (first && first.name !== 'dashboard') {
        matched = [{ path: '/dashboard', meta: { title: 'Dashboard' }}].concat(matched)
      }
      this.levelList = matched
    }
  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
  .app-breadcrumb.el-breadcrumb {
    display: inline-block;
    font-size: 14px;
    line-height: 50px;
    margin-left: 10px;
    .no-redirect {
      color: #97a8be;
      cursor: text;
    }
  }
</style>
