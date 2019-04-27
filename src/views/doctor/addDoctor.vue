<template>
  <div class="addcontent">
    <div class="adddoctor">
      <el-upload
        class="upload-demo"
        action="https://jsonplaceholder.typicode.com/posts/"
        :on-preview="handlePreview"
        :on-remove="handleRemove"
        :before-remove="beforeRemove"
        multiple
        :limit="3"
        :on-exceed="handleExceed"
        :file-list="fileList"
      >
        <el-button size="small" type="primary">点击上传图片</el-button>
      </el-upload>
      <el-input v-model="input3" placeholder="医生姓名">
        <template slot="prepend">
          <svg-icon icon-class="user" />
        </template>
      </el-input>
      <el-input v-model="input4" placeholder="医生所在诊室">
        <template slot="prepend">
          <svg-icon icon-class="password" />
        </template>
      </el-input>
      <el-input v-model="input5" placeholder="医生职称">
        <template slot="prepend">
          <svg-icon icon-class="dashboard" />
        </template>
      </el-input>
      <el-input v-model="input6" placeholder="挂号金额">
        <template slot="prepend">
          <svg-icon icon-class="dashboard" />
        </template>
      </el-input>
      <el-input v-model="textarea" type="textarea" :rows="2" placeholder="医生简介" />
      <el-button type="primary" @click="change">点击保存</el-button>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  data() {
    return {
      textarea: '',
      fileList: [
        // 上传图片
      ],
      input3: '', // 姓名
      input4: '', // 工作地点
      input5: '', // 医生职称
      input6: '', // 挂号金额
      value: ''
    }
  },
  created() {
    this.input3 = this.$route.query.id
    this.input5 = this.$route.query.job
    this.input6 = this.$route.query.money
    this.textarea = this.$route.query.introduction
    this.input4 = this.$route.query.department
  },
  methods: {
    change() {
      console.log(name)
    },
    handleRemove(file, fileList) {
      console.log(file, fileList)
    },
    handlePreview(file) {
      console.log(file)
    },
    handleExceed(files, fileList) {
      this.$message.warning(
        `当前限制选择 3 个文件，本次选择了 ${
          files.length
        } 个文件，共选择了 ${files.length + fileList.length} 个文件`
      )
    },
    beforeRemove(file, fileList) {
      return this.$confirm(`确定移除 ${file.name}？`)
    }
  }
}
</script>

<style lang="scss" scoped>
.addcontent {
  display: flex;
}
.adddoctor {
  width: 22%;
  transform: translateX(180%);
}
.adddoctor * {
  margin-bottom: 10%;
}
.el-select .el-input {
  width: 130px;
}
.input-with-select .el-input-group__prepend {
  background-color: #fff;
}
</style>
