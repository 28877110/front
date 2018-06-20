<template>
  <p class="login">
    <el-tabs v-model="activeName" ref="activeName" @tab-click="handleClick">
      <el-tab-pane label="登录" name="first">
        <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" >
          <el-form-item label="帐号" prop="name">
            <el-input v-model="ruleForm.name"></el-input>
          </el-form-item>
          <el-form-item label="密码" prop="pass">
            <el-input type="password" v-model="ruleForm.pass" auto-complete="off"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="submitForm('ruleForm')">登录</el-button>
            <el-button @click="resetForm('ruleForm')">重置</el-button>
          </el-form-item>
        </el-form>
      </el-tab-pane>
      <el-tab-pane label="注册" name="second">
        <register></register>
      </el-tab-pane>
      <el-tab-pane label="找回密码" name="third">
        <findPassword></findPassword>
      </el-tab-pane>
    </el-tabs>
  </p>
</template>
<script>
import register from '@/components/register'
import ElTabPane from 'element-ui/packages/tabs/src/tab-pane'
import findPassword from '@/components/findPassword'
import service from '@/utils/request.js'
// import service from '@/utils/'
export default {
  data () {
    var validatePass = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入密码'))
      } else {
        callback()
      }
    }
    return {
      activeName: 'first',
      ruleForm: {
        name: 'asd',
        pass: 'asd'
      },
      rules: {
        name: [
          { required: true, message: '请输入您的帐号', trigger: 'blur' },
          { min: 2, max: 10, message: '长度在 2 到 10 个字符', trigger: 'blur' }
        ],
        pass: [
          { required: true, validator: validatePass, trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    // 选项卡切换
    handleClick (tab, event) {
    },
    // 重置表单
    resetForm (formName) {
      this.$refs[formName].resetFields()
    },
    // 提交表单
    submitForm (formName) {
      service.post('api/login', {
        'username': this.ruleForm.name,
        'password': this.ruleForm.pass
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
              message: '登录成功'
            })
            let logintoken = response.token
            this.$store.commit('setToken', logintoken)
            if (response.permission === 2) {
              this.$router.push('carlist')
            } else {
              this.$router.push('addCar')
            }
          }
        })
    }
  },
  components: {
    ElTabPane,
    register,
    findPassword
  }
}
</script>
<style>

</style>
