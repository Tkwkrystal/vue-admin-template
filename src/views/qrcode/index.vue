<template>
  <div class="app-container">
    <div class="module-content">
      <!--解析二维码-->
      <h1 class="module-head">解析二维码</h1>
      <!-- <div class="box" id="analytic" style="position: relative;">
            <h3>长按二维码解析</h3>
            [外链图片转存失败(img-rmp7uDdM-1562141512342)(https://mp.csdn.net/mdeditor/tyfo.png)]
            <p class="url-box" id="urlBox"></p>
      </div>-->
      <div class="box">
        <h3>上传二维码解析</h3>
        <h5>上传图片后点击预览大图 显示网址</h5>
        <div style="position: relative;">
          <!-- [外链图片转存失败(img-jDL9fkbI-1562141512350)(https://mp.csdn.net/mdeditor/tu.png)] -->
          <el-upload
            action="http://192.168.43.117:8080/common/upload"
            list-type="picture-card"
            :on-preview="handlePictureCardPreview"
            :on-remove="handleRemove"
            :auto-upload="true"
            :on-success="handleAvatarSuccess"
            :before-upload="beforeAvatarUpload"
          >
            <i class="el-icon-plus"></i>
          </el-upload>
          <el-dialog :visible.sync="dialogVisible">
            <img width="100%" :src="dialogImageUrl" alt />
          </el-dialog>
        </div>
        <!-- <input type="file" @change="getUrl('file-url')" name id="file" value />
        <p class="url-box"></p>-->
        <div>
          网址链接：
          <span>{{urllink}}</span>
        </div>
      </div>
    </div>
    <el-button @click="getewm">生成二维码</el-button>
    <div>{{link}}</div>
    <div id="qrcode" ></div>
  </div>
</template>

<script>
import QrcodeDecoder from "qrcode-decoder";
import QRCode  from "qrcodejs2"

export default {
  name: "qrcode",
  data() {
    return {
       link: "person:{name:'Tom',gentle: 'male'}",
      urllink: "",
      imageUrl: "",
      dialogImageUrl: "",
      dialogVisible: false
    };
  },
  methods: {
    getewm(){
       this.$nextTick (function () {
       this.qrcode();
    })
    },
     qrcode () {
                let that = this;
                let qrcode = new QRCode('qrcode', {
                    width: 124,
                    height: 124,        // 高度
                    text:  this.link,   // 二维码内容
                    // render: 'canvas' ,   // 设置渲染方式（有两种方式 table和canvas，默认是canvas）
                    // background: '#f0f',   // 背景色
                    // foreground: '#ff0'    // 前景色
                })
            },
    getUrl(type) {
      let elem = document.getElementById("file");
      console.log(elem);
      let qr = new QrcodeDecoder();
      let url = null;
      if (type === "img-url") {
        url = elem.src;
      } else if (type === "file-url" && elem.files.length > 0) {
        url = this.getObjectURL(elem.files[0]);
      }
      console.log(url);
      qr.decodeFromImage(url).then(res => {
        //打印结果为 解析出来的 二维码地址
        this.urllink = res.data || "无法解析";
      });
    },
    getObjectURL(file) {
      let url = null;

      if (window.createObjectURL !== undefined) {
        // basic

        url = window.createObjectURL(file);
      } else if (window.URL !== undefined) {
        // mozilla(firefox)

        url = window.URL.createObjectURL(file);
      } else if (window.webkitURL !== undefined) {
        // webkit or chrome

        url = window.webkitURL.createObjectURL(file);
      }

      return url;
    },
    handleRemove(file, fileList) {
      console.log(file, fileList);
      this.urllink = ''
    },
    handlePictureCardPreview(file) {
      this.dialogImageUrl = file.url;
      this.dialogVisible = true;
      let qr = new QrcodeDecoder();
      qr.decodeFromImage(file.url).then(res => {
        //打印结果为 解析出来的 二维码地址
        this.urllink = res.data || "无法解析";
      });
    },
    handleAvatarSuccess(res, file) {
      this.imageUrl = URL.createObjectURL(file.raw);
      let qr = new QrcodeDecoder();
      qr.decodeFromImage(file.url).then(res => {
        //打印结果为 解析出来的 二维码地址
        this.urllink = res.data || "无法解析";
      });
    },
    beforeAvatarUpload(file) {
      const isJPG = file.type === "image/jpeg" || "image/jpg" || "png";
      const isLt2M = file.size / 1024 / 1024 < 2;

      if (!isJPG) {
        this.$message.error("上传头像图片只能是 JPG 或 PNG 格式!");
      }
      if (!isLt2M) {
        this.$message.error("上传头像图片大小不能超过 2MB!");
      }
      return isJPG && isLt2M;
    },
    //  headers() {
    //   return {
    //     "Authorization": "eyJhbGciOiJIUzUxMiJ9.eyJsb2dpbl91c2VyX2tleToiOiIzNmUxNTJkZi0zOWRhLTQ4ZTItYjkyMi02ZDAzYTljY2YxMjMifQ.PSHG3ayweXbFeihXSsZEmVNRx5btmHyX32UNI2WvF52hjv6T2KvMJnv1M5fg4wpHMIpKRwQZe0ja_BrjFNwLCw"
    //     // "Content-Type": "application/json;charset=UTF-8"
    //   };
    // }
  },
  computed: {
    // headers() {
    //   return {
    //     "Authorization": "eyJhbGciOiJIUzUxMiJ9.eyJsb2dpbl91c2VyX2tleToiOiIzNmUxNTJkZi0zOWRhLTQ4ZTItYjkyMi02ZDAzYTljY2YxMjMifQ.PSHG3ayweXbFeihXSsZEmVNRx5btmHyX32UNI2WvF52hjv6T2KvMJnv1M5fg4wpHMIpKRwQZe0ja_BrjFNwLCw"
    //     // "Content-Type": "application/json;charset=UTF-8"
    //   };
    // }
  }
};
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
body {
  margin: 0;
}

.module-content {
  min-width: 320px;
  max-width: 1000px;
  width: 100%;
  color: #000;
  margin: 0 auto;
  padding-left: 10px;
  box-sizing: border-box;
}

.module-head {
  text-align: center;
  font-weight: 500;
  margin: 0;
  font-size: 30px;
  height: 100px;
  line-height: 100px;
  color: #000;
}

.box h3 {
  font-weight: 300;
  margin: 0;
  font-size: 20px;
  height: 60px;
  line-height: 60px;
  color: #000;
}

.url-box {
  height: 30px;
  line-height: 30px;
  font-size: 14px;
}

#file {
  position: absolute;
  width: 120px;
  height: 120px;
  opacity: 0;
  top: 0;
  left: 0;
  overflow: hidden;
  z-index: 10;
}
.qrcode{
    display: inline-block;
    img {
        width: 132px;
        height: 132px;
        background-color: #fff; //设置白色背景色
        padding: 6px; // 利用padding的特性，挤出白边
        box-sizing: border-box;
    }
}
</style>