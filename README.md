# vue-admin-template
vue后台管理基础模板
# vue-admin-template

> 这是一个 极简的 vue admin 管理后台 它只包含了 Element UI & axios & iconfont & permission control & lint，这些搭建后台必要的东西。
## 项目截图
<img src="https://github.com/Tkwkrystal/vue-admin-template/blob/master/screenshot/login.jpg"/>
<img src="https://github.com/Tkwkrystal/vue-admin-template/blob/master/screenshot/dashboard.jpg"/>
<img src="https://github.com/Tkwkrystal/vue-admin-template/blob/master/screenshot/table.jpg"/>

### 友情赞助
如果本项目对你有较大的帮助，可以对我打赏，否则不需要，随便放个二维码，争取每天多喝一杯肥宅水！


<img src="https://github.com/Tkwkrystal/wepy-mall/blob/master/screenshots/payme.jpg" width="400" height="400"/>

## 相关项目

如何从零构建后一个完整的后台项目:

- [手摸手，带你用 vue 撸后台 系列一(基础篇)](https://juejin.im/post/59097cd7a22b9d0065fb61d2)
- [手摸手，带你用 vue 撸后台 系列二(登录权限篇)](https://juejin.im/post/591aa14f570c35006961acac)
- [手摸手，带你用 vue 撸后台 系列三 (实战篇)](https://juejin.im/post/593121aa0ce4630057f70d35)
- [手摸手，带你用 vue 撸后台 系列四(vueAdmin 一个极简的后台基础模板,专门针对本项目的文章,算作是一篇文档)](https://juejin.im/post/595b4d776fb9a06bbe7dba56)
- [手摸手，带你封装一个 vue component](https://segmentfault.com/a/1190000009090836)

## Build Setup

```bash
# Clone project
git clone https://github.com/PanJiaChen/vue-admin-template.git

# Install dependencies
npm install

# 建议不要用cnpm  安装有各种诡异的bug 可以通过如下操作解决npm速度慢的问题
npm install --registry=https://registry.npm.taobao.org

# Serve with hot reload at localhost:9528
npm run dev

# Build for production with minification
npm run build

# Build for production and view the bundle analyzer report
npm run build --report
```

## vue.js官网： ##
https://cn.vuejs.org

## vue调试： ##
chrome插件vue Devtools

## UI 组件库： ##
- https://github.com/ElemeFE/element
- http://element.eleme.io/#/zh-CN/component/form

## 移动UI 组件库： ##
- mint
- iview
- vonic
## app： ##
Weex 是阿里的跨平台用户界面开发框架，Weex 的 JavaScript 框架运行时用的就是 Vue。在此之后，在 Weex 的帮助下，使用 Vue 语法开发的组件不仅仅可以运行在浏览器端，还能被用于开发 iOS 和 Android 上的原生应用。

## vue中less： ##
npm安装less-loader插件

## 总结： ##
vue + vuex+ axios + vue-router + webpack + es6 + less


## 安装路由模块 ##
- npm install vue-router --save-dev
- npm install vue-resource --save-dev（http请求）

## json接口 ##
jsonplaceholder.typicode.com(提供一些常用的接口)

## mock ##
- https://easy-mock.com/login  
- 接口访问时url地址要全， post类型时访问看图片
 
 <img src="https://github.com/Tkwkrystal/vue-admin-template/blob/master/screenshot/post.png" alt="">




## 七牛云： ##
    融合cdn 域名 内容管理
    gif动图七牛云地址：
    http://pbn1z3d57.bkt.clouddn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif
    (我自己的地址，现在不介意用七牛云，原因：现在给的测试域名只有一个月的试用时间！！！所以我改用阿里的，免费还功能强大)

## 阿里云对象存储（图片） ##
    https://oss.console.aliyun.com/bucket/oss-cn-shenzhen/vue-admin-template/object
    （图像处理-访问管理 在图片url后+‘-logingif’）

## 调试工具 vue-devtools  ## 
- 最简单的：chrome扩展工具应用商店下载，然后
- C:\Users\Administrator\AppData\Local\Google\Chrome\User Data\Default\Extensions\nhdogjmejiglipccpnnnanhbledajbpd\4.1.5_0
- manifest文件中："persistent": false, 改为true

## vue-echarts  ## 
http://npm.taobao.org/package/vue-echarts-v3
github：https://github.com/xlsdg/vue-echarts-v3-demo

## 注意事项： ##
1. 空格和注释报错：build-webpack.base.conf.js中：const createLintingRule = () => ({})内容注释饥即可
2. 接口业务流程：e.g：views/login/index.vue绑定方法---->store/modules/user.js中actions---->api/login.js

## webpack ##
执行脚本的命令有点麻烦，因此，我们可以利用 npm，把命令写在 package.json 中：

 	"scripts": {
    	"dev": "webpack-dev-server --inline --progress --config build/webpack.dev.conf.js",
    	"start": "npm run dev",
    	"build": "node build/build.js",
    	"build:report": "npm_config_report=true npm run build",
    	"lint": "eslint --ext .js,.vue src",
    	"test": "npm run lint",
    	"svgo": "svgo -f src/icons/svg --config=src/icons/svgo.yml"
  	},
基础知识网站：https://github.com/wallstreetcn/webpack-and-spa-guide

进阶：https://juejin.im/post/5b56909a518825195f499806

## build && config 文件夹说明 ##
https://www.cnblogs.com/caideyipi/p/8496656.html
    


## vue-route ##
https://router.vuejs.org/zh/guide/advanced/scroll-behavior.html





## 作者

by author tangkewei 
2018.10.31
