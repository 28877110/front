<template>
  <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
    <el-form-item label="帐号" prop="name">
      <el-input v-model="ruleForm.name"></el-input>
    </el-form-item>
    <el-form-item label="验证码" prop="code">
      <el-input v-model="ruleForm.code"></el-input>
    </el-form-item>
    <el-form-item label="新密码" prop="pass">
      <el-input type="password" v-model="ruleForm.pass" auto-complete="off"></el-input>
    </el-form-item>
    <el-form-item label="确认密码" prop="checkPass">
      <el-input type="password" v-model="ruleForm.checkPass" auto-complete="off"></el-input>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="queryPassword('ruleForm')">确认重置密码</el-button>
      <el-button @click="sendMail('ruleForm')">发送邮件</el-button>
    </el-form-item>
  </el-form>
</template>

<script>
import service from '@/utils/request.js'
export default {
  name: 'findPassword',
  data () {
    var validatePass = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入密码'))
      } else {
        if (this.ruleForm.checkPass !== '') {
          this.$refs.ruleForm.validateField('checkPass')
        }
        callback()
      }
    }
    var validatePass2 = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请再次输入密码'))
      } else if (value !== this.ruleForm.pass) {
        callback(new Error('两次输入密码不一致!'))
      } else {
        callback()
      }
    }
    return {
      activeName: 'second',
      ruleForm: {
        name: 'asd',
        pass: 'asd',
        checkPass: 'asd'
      },
      rules: {
        name: [
          {required: true, message: '请输入您的帐号', trigger: 'blur'},
          {min: 2, max: 10, message: '长度在 2 到 10 个字符', trigger: 'blur'}
        ],
        pass: [
          { required: true, validator: validatePass, trigger: 'blur' }
        ],
        checkPass: [
          { required: true, validator: validatePass2, trigger: 'blur' }
        ],
        code: [
          {required: true, message: '请输入您的验证码', trigger: 'blur'},
          {min: 1, max: 6, message: '验证码格式不对', trigger: 'blur'}
        ]
      }
    }
  },
  methods: {
    queryPassword (ruleForm) {
      service.post('api/password', {
        'name': this.ruleForm.name,
        'newpassword': this.ruleForm.pass,
        'code': this.ruleForm.code
      })
        .then((response) => {
          console.log(response.code)
          if (response.code !== 200) {
            this.$message({
              message: response.reason
            })
          } else {
            this.$message({
              type: 'success',
              message: '修改成功'
            })
          }
        })
    },
    sendMail (ruleForm) {
      service.post('api/mail', {
        'name': this.ruleForm.name
      })
        .then((response) => {
          console.log(response.code)
          this.$message({
            message: '验证码已经发送邮件到你邮箱'
          })
        })
    }
  }
}
</script>

<style scoped>

</style>
