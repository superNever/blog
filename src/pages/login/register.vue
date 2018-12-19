/**
* Created by wanghongxiang on 2018/2/4.
 */
<template>
  <div class="login-container">
    <h3>欢迎注册XXX</h3>
    <i-form class="login-content" ref="formCustom" :model="formCustom" :rules="ruleCustom" :label-width="0">
      <FormItem prop="usrname">
        <i-input placeholder="用户名" type="password" v-model="formCustom.usrname"></i-input>
      </FormItem>
      <FormItem prop="passwd">
        <i-input placeholder="密码" type="password" v-model="formCustom.passwd"></i-input>
      </FormItem>
      <FormItem prop="passwdCheck">
        <i-input placeholder="确认密码" type="password" v-model="formCustom.passwdCheck"></i-input>
      </FormItem>
      <FormItem>
        <i-button long type="primary" @click="handleSubmit('formCustom')">注册</i-button>
      </FormItem>
      <p class="text-muted text-center">
        <small>已经有账户了？</small> |
        <a href="/#/login/loginin">点此登录</a>
      </p>
    </i-form>
  </div>

</template>
<script>
  export default {
    data () {
      const validateName = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('Please enter your username'))
        } else {
          callback()
        }
      }
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
          callback(new Error('Please enter your password again'))
        } else if (value !== this.formCustom.passwd) {
          callback(new Error('The two i-input passwords do not match!'))
        } else {
          callback()
        }
      }

      return {
        formCustom: {
          usrname: '',
          passwd: '',
          passwdCheck: ''
        },
        ruleCustom: {
          usrname: [
            {validator: validateName, trigger: 'blur'}
          ],
          passwd: [
            { validator: validatePass, trigger: 'blur' }
          ],
          passwdCheck: [
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
