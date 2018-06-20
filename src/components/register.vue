<template>
  <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
    <el-form-item label="帐号" prop="name">
      <el-input v-model="ruleForm.name"></el-input>
    </el-form-item>
    <el-form-item label="密码" prop="pass">
      <el-input type="password" v-model="ruleForm.pass" auto-complete="off"></el-input>
    </el-form-item>
    <el-form-item label="确认密码" prop="checkPass">
      <el-input type="password" v-model="ruleForm.checkPass" auto-complete="off"></el-input>
    </el-form-item>
    <el-form-item label="邮箱" prop="mail">
      <el-input v-model="ruleForm.mail"></el-input>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="submitForm('ruleForm')">注册</el-button>
      <el-button @click="resetForm('ruleForm')">重置</el-button>
    </el-form-item>
  </el-form>
</template>

<script>
import service from '@/utils/request.js'
export default {
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
    var validateMail = (rule, value, callback) => {
      var regEmail = /^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/
      if (value === '') {
        callback(new Error('请输入邮箱'))
      } else if (!regEmail.test(value)) {
        callback(new Error('邮箱格式错误'))
      } else {
        callback()
      }
    }
    return {
      activeName: 'second',
      ruleForm: {
        name: 'asd',
        pass: 'asd',
        checkPass: 'asd',
        mail: 'asd@qq.com'
      },
      rules: {
        name: [
          { required: true, message: '请输入您的帐号', trigger: 'blur' },
          { min: 2, max: 10, message: '长度在 2 到 10 个字符', trigger: 'blur' }
        ],
        pass: [
          { required: true, validator: validatePass, trigger: 'blur' }
        ],
        checkPass: [
          { required: true, validator: validatePass2, trigger: 'blur' }
        ],
        mail: [
          { required: true, validator: validateMail, trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    submitForm (formName) {
      service.post('api/users', {
        'username': this.ruleForm.name,
        'password': this.ruleForm.pass,
        'mail': this.ruleForm.mail
      })
        .then((response) => {
          console.log(response.code)
          this.$message({
            message: response.reason
          })
        })
    },
    // 刷新
    resetForm (formName) {
      this.$refs[formName].resetFields()
    }
  }
}
</script>
<style scoped>

</style>
