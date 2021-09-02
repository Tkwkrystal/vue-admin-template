<template>
  <div class="login-container">
    <div v-for="(item,index) in arr " :key="index">
      <div >{{arr[index].test1}}</div>
    </div>
  </div>
</template>

<script>
import { isvalidUsername } from '@/utils/validate'
import $axios from 'axios'

export default {
  name: 'Login',
  data() {
    const validateUsername = (rule, value, callback) => {
      if (!isvalidUsername(value)) {
        callback(new Error('请输入正确的用户名'))
      } else {
        callback()
      }
    }
    const validatePass = (rule, value, callback) => {
      if (value.length < 5) {
        callback(new Error('密码不能小于5位'))
      } else {
        callback()
      }
    }
    return {
      arr:[{test1:"",test2:""},{test1:"",test2:""},{test1:"",test2:""},{test1:"",test2:""},{test1:"",test2:""},{test1:"",test2:""},{test1:"",test2:""},{test1:"",test2:""},{test1:"",test2:""},{test1:"",test2:""},{test1:"",test2:""},{test1:"",test2:""},{test1:"",test2:""},{test1:"",test2:""},{test1:"",test2:""},{test1:"",test2:""},{test1:"",test2:""},{test1:"",test2:""}],
      logininfo:{
  code: "36ST",
  password: "admin123",
  username: "admin",
  uuid: "ef89f66d105d4b6b86061df773d2de95"
},
      loginForm: {
        username: 'admin',
        password: 'admin'
      },
      loginRules: {
        // Form 组件提供了表单验证的功能，只需要通过 rules 属性传入约定的验证规则，并将 Form-Item 的 prop 属性设置为需校验的字段名即可
        username: [{ required: true, trigger: 'blur', validator: validateUsername }],
        password: [{ required: true, trigger: 'blur', validator: validatePass }]
      },
      loading: false,
      pwdType: 'password',
      redirect: undefined
    }
  },
  watch: {
    $route: {
      // 该回调将会在侦听开始之后被立即调用
      handler: function(route) {
        this.redirect = route.query && route.query.redirect
      },
      immediate: true
    }
  },
  methods: {
    showPwd() {
      if (this.pwdType === 'password') {
        this.pwdType = ''
      } else {
        this.pwdType = 'password'
      }
    },
    handleLogin() {
      let that = this
      $axios.get('http://192.168.43.117:8080/captchaImage').then(res => {
        // console.log(res);
        
        if(res.data.code == 200){
          

          
          // this.logininfo.uuid = res.data.uuid
          
          let username = this.logininfo.username
          let password = this.logininfo.passwordw
          let uuid = this.logininfo.uuid
          let code = this.logininfo.code
          $axios({
            url: 'http://192.168.43.117:8080/login',
            method: 'post',
            data: {
              username,
              password,
              uuid,
              code,
            }
            }).then(res => {
              
              $axios({
            url: 'http://192.168.43.117:8080/getInfo',
            method: 'post',
             headers:{
        'Authorization':res.data.token
    }
            }).then(res => {
              console.log(res);
              
            })
              
            })
        }
          
      })
      // this.$refs.loginForm.validate(valid => {
      //   if (valid) {
      //     this.loading = true
      //     this.$store.dispatch('Login', this.loginForm).then(() => {
      //       this.loading = false
      //       this.$router.push({ path: this.redirect || '/' })
      //     }).catch(() => {
      //       this.loading = false
      //     })
      //   } else {
      //     console.log('error submit!!')
      //     return false
      //   }
      // })
    }
  }
}
</script>

<style rel="stylesheet/scss" lang="scss">
$bg:#2d3a4b;
$light_gray:#eee;

/* reset element-ui css */
.login-container {
  .el-input {
    display: inline-block;
    height: 47px;
    width: 85%;
    input {
      background: transparent;
      border: 0px;
      -webkit-appearance: none;
      border-radius: 0px;
      padding: 12px 5px 12px 15px;
      color: $light_gray;
      height: 47px;
      &:-webkit-autofill {
        -webkit-box-shadow: 0 0 0px 1000px $bg inset !important;
        -webkit-text-fill-color: #fff !important;
      }
    }
  }
  .el-form-item {
    border: 1px solid rgba(255, 255, 255, 0.1);
    background: rgba(0, 0, 0, 0.1);
    border-radius: 5px;
    color: #454545;
  }
}

</style>

<style rel="stylesheet/scss" lang="scss" scoped>
$bg:#2d3a4b;
$dark_gray:#889aa4;
$light_gray:#eee;
.login-container {
  position: fixed;
  height: 100%;
  width: 100%;
  background-color: $bg;
  .login-form {
    position: absolute;
    left: 0;
    right: 0;
    width: 520px;
    max-width: 100%;
    padding: 35px 35px 15px 35px;
    margin: 120px auto;
  }
  .tips {
    font-size: 14px;
    color: #fff;
    margin-bottom: 10px;
    span {
      &:first-of-type {
        margin-right: 16px;
      }
    }
  }
  .svg-container {
    padding: 6px 5px 6px 15px;
    color: $dark_gray;
    vertical-align: middle;
    width: 30px;
    display: inline-block;
  }
  .title {
    font-size: 26px;
    font-weight: 400;
    color: $light_gray;
    margin: 0px auto 40px auto;
    text-align: center;
    font-weight: bold;
  }
  .show-pwd {
    position: absolute;
    right: 10px;
    top: 7px;
    font-size: 16px;
    color: $dark_gray;
    cursor: pointer;
    user-select: none;
  }
}
</style>
