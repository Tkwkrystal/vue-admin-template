(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-5bba"],{"+WRd":function(e,t,i){"use strict";var a=i("z+i0");i.n(a).a},"6iPv":function(e,t,i){"use strict";i.r(t);var a=i("XI6M"),n={name:"qrcode",data:function(){return{urllink:"",imageUrl:"",dialogImageUrl:"",dialogVisible:!1}},methods:{getUrl:function(e){var t=this,i=document.getElementById("file");console.log(i);var n=new a.a,l=null;"img-url"===e?l=i.src:"file-url"===e&&i.files.length>0&&(l=this.getObjectURL(i.files[0])),console.log(l),n.decodeFromImage(l).then(function(e){t.urllink=e.data||"无法解析"})},getObjectURL:function(e){var t=null;return void 0!==window.createObjectURL?t=window.createObjectURL(e):void 0!==window.URL?t=window.URL.createObjectURL(e):void 0!==window.webkitURL&&(t=window.webkitURL.createObjectURL(e)),t},handleRemove:function(e,t){console.log(e,t),this.urllink=""},handlePictureCardPreview:function(e){var t=this;this.dialogImageUrl=e.url,this.dialogVisible=!0,(new a.a).decodeFromImage(e.url).then(function(e){t.urllink=e.data||"无法解析"})},handleAvatarSuccess:function(e,t){var i=this;this.imageUrl=URL.createObjectURL(t.raw),(new a.a).decodeFromImage(t.url).then(function(e){i.urllink=e.data||"无法解析"})},beforeAvatarUpload:function(e){var t="image/jpeg"===e.type||"image/jpg",i=e.size/1024/1024<2;return t||this.$message.error("上传头像图片只能是 JPG 或 PNG 格式!"),i||this.$message.error("上传头像图片大小不能超过 2MB!"),t&&i}}},l=(i("+WRd"),i("KHd+")),o=Object(l.a)(n,function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"app-container"},[i("div",{staticClass:"module-content"},[i("h1",{staticClass:"module-head"},[e._v("解析二维码")]),e._v(" "),i("div",{staticClass:"box"},[i("h3",[e._v("上传二维码解析")]),e._v(" "),i("h5",[e._v("上传图片后点击预览大图 显示网址")]),e._v(" "),i("div",{staticStyle:{position:"relative"}},[i("el-upload",{attrs:{action:"https://jsonplaceholder.typicode.com/posts/","list-type":"picture-card","on-preview":e.handlePictureCardPreview,"on-remove":e.handleRemove,"auto-upload":!1,"on-success":e.handleAvatarSuccess,"before-upload":e.beforeAvatarUpload}},[i("i",{staticClass:"el-icon-plus"})]),e._v(" "),i("el-dialog",{attrs:{visible:e.dialogVisible},on:{"update:visible":function(t){e.dialogVisible=t}}},[i("img",{attrs:{width:"100%",src:e.dialogImageUrl,alt:""}})])],1),e._v(" "),i("div",[e._v("\n        网址链接：\n        "),i("span",[e._v(e._s(e.urllink))])])])])])},[],!1,null,"02556666",null);o.options.__file="index.vue";t.default=o.exports},"z+i0":function(e,t,i){}}]);