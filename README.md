# vue-admin-template
vue后台管理基础模板
# vue-admin-template

> 这是一个 极简的 vue admin 管理后台 它只包含了 Element UI & axios & iconfont & permission control & lint，这些搭建后台必要的东西。

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

## 注意事项：

1. 空格和注释报错：build-webpack.base.conf.js中：const createLintingRule = () => ({})内容注释饥即可
2. 接口业务流程：e.g：views/login/index.vue绑定方法---->store/modules/user.js中actions---->api/login.js

之后还有一个小细节是如果你用了全局对象方式引入 vue，就不需要 手动 `Vue.use(Vuex）` ，它会自动挂载，具体见 [issue](https://github.com/vuejs/vuex/issues/731)

最终你可以使用 `npm run build --report` 查看效果

调试工具 vue-devtools  最简单的：chrome扩展工具应用商店下载，然后
C:\Users\Administrator\AppData\Local\Google\Chrome\User Data\Default\Extensions\nhdogjmejiglipccpnnnanhbledajbpd\4.1.5_0manifest
文件中："persistent": false, 改为true

空格和注释报错：build-webpack.base.conf.js中：const createLintingRule = () => ({})内容注释饥即可

阿里云对象存储（图片）：https://oss.console.aliyun.com/bucket/oss-cn-shenzhen/vue-admin-template/object（图像处理-访问管理 在图片url后+‘-logingif’）

build && config 文件夹说明:https://www.cnblogs.com/caideyipi/p/8496656.html

## 作者

by author tangkewei 
2018.10.31
