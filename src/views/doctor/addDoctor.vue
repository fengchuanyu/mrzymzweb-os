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
      <el-select v-model="value" placeholder="请选择">
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        />
      </el-select>
      <el-input v-model="input4" placeholder="工作地点">
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
      <el-button type="primary">点击保存</el-button>
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
      input3: '', // 医生姓名
      input4: '', // 工作地点
      input5: '', // 医生职称
      input6: '', // 挂号金额
      options: [
        {
          value: '选项1',
          label: '妇科'
        },
        {
          value: '选项2',
          label: '内科'
        },
        {
          value: '选项3',
          label: '康复科'
        }
      ],
      value: ''
    }
  },
  methods: {
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
