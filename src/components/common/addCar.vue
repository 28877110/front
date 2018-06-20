<template>
  <div>
    <el-breadcrumb>
      <el-breadcrumb-item><i class="el-icon-date"></i> 车</el-breadcrumb-item>
      <el-breadcrumb-item>添加车辆</el-breadcrumb-item>
    </el-breadcrumb>
    <el-form :model="ruleForm" ref="ruleForm" label-width="100px" class="demo-ruleForm">
      <el-form-item label="车辆名字" prop="name">
        <el-input v-model="ruleForm.name"></el-input>
      </el-form-item>
      <el-form-item label="车辆描述" prop="desc">
        <el-input type="textarea" v-model="ruleForm.desc"></el-input>
      </el-form-item>
      <el-form-item label="车辆价格" prop="price">
        <el-input v-model="ruleForm.price"></el-input>
      </el-form-item>
      <el-form-item label="车辆数量" prop="price">
        <el-input v-model="ruleForm.num"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">立即创建</el-button>
      </el-form-item>
    </el-form>
    <el-upload
      class="upload-demo"
      ref="upload"
      action="/api/api/uploadFile"
      :file-list="fileList"
      :on-preview="handlePreview"
      :on-remove="handleRemove"
      :before-upload="beforeAvatarUpload"
      list-type="picture"
      :auto-upload="false">
      <el-button slot="trigger" size="small" type="primary">选取文件</el-button>
      <el-button style="margin-left: 10px;" size="small" type="success" @click="submitUpload">上传到服务器</el-button>
    </el-upload>

  </div>
</template>

<script>
import service from '@/utils/request.js'
export default {
  data () {
    return {
      fileList: [],
      ruleForm: {
        name: '',
        desc: '',
        price: '',
        num: ''
      }
    }
  },
  methods: {
    beforeAvatarUpload (file) {
      const isJPG = file.type === 'image/jpeg'
      const isLt2M = file.size / 1024 / 1024 < 10
      if (!isJPG) {
        this.$message.error('上传头像图片只能是 JPG 格式!')
      }
      if (!isLt2M) {
        this.$message.error('上传头像图片大小不能超过 10MB!')
      }
      return isJPG && isLt2M
    },
    handleRemove (file, fileList) {
      this.fileList = fileList
    },
    handlePreview (file) {
      console.log('asdasd')

      console.log(this.fileList)
      console.log(file)
    },
    submitUpload () {
      console.log(this.ruleForm.name)
      console.log(this.ruleForm.desc)
      console.log(this.fileList)
      this.$refs.upload.submit()
    },
    onSubmit () {
      console.log(this.fileList.length)
      console.log(this.ruleForm.name)
      console.log(this.fileList[0])
      service.post('api/car', {
        'name': this.ruleForm.name,
        'describe': this.ruleForm.desc,
        'price': this.ruleForm.price,
        'surplus': this.ruleForm.num,
        'photo1': this.fileList[0]['name'],
        'photo2': this.fileList[1]['name']
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
              message: '添加成功'
            })
          }
        })
    }
  }
}

</script>

<style scoped>

</style>
