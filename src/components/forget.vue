//找回密码
<template>
  <div class="findPassword">
    <el-form :model="ruleForm">
      <el-form-item label="帐号" prop="name">
        <el-input v-model="ruleForm.name"></el-input>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  name: 'forget'
}
</script>

<style scoped>

</style>
