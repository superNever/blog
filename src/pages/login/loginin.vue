/**
* Created by wanghongxiang on 2018/2/3.
 */
<template>
  <div class="login-container">
    <h3>欢迎使用XXX</h3>
    <i-form class="login-content" ref="formCustom" :model="formCustom" :rules="ruleCustom" :label-width="0">
      <FormItem prop="usrname">
        <i-input placeholder="用户名" type="password" v-model="formCustom.usrname"></i-input>
      </FormItem>
      <FormItem prop="passwd">
        <i-input placeholder="密码" type="password" v-model="formCustom.passwd"></i-input>
      </FormItem>
      <FormItem>
        <i-button long type="primary" @click="handleSubmit('formCustom')">登陆</i-button>
      </FormItem>
      <p class="text-muted text-center">
        <a href="/"><small>忘记密码了？</small></a> |
        <a href="/#/login/register">注册一个新账号</a>
      </p>
    </i-form>
  </div>

</template>
<script>
  export default {
    data () {
      const validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('Please enter your password'))
        } else {
          if (this.formCustom.passwdCheck !== '') {
            // 对第二个密码框单独验证
            this.$refs.formCustom.validateField('passwdCheck')
          }
          callback()
        }
      }
      const validatePassCheck = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('Please enter your username'))
        } else {
          callback()
        }
      }

      return {
        formCustom: {
          passwd: '',
          usrname: ''
        },
        ruleCustom: {
          passwd: [
            { validator: validatePass, trigger: 'blur' }
          ],
          usrname: [
            { validator: validatePassCheck, trigger: 'blur' }
          ]
        }
      }
    },
    methods: {
      handleSubmit (name) {
        this.$refs[name].validate((valid) => {
          if (valid) {
            this.$Message.success('Success!')
          } else {
            this.$Message.error('请填入必输项!')
          }
        })
      }
    }
  }
</script>
<style lang="less" scoped>
  .login-container {
    text-align: center;
    max-width: 400px;
    width: 300px;
    margin: 0 auto;
    z-index: 100;
    padding-top: 40px;
    h3 {
      margin-top: 5px;
      font-weight: 600;
      font-size: 16px;
      margin-bottom: 10px;
    }
    .login-content {

    }
  }

</style>
