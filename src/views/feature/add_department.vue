<template>
  <div id="container">
    <el-radio-group v-model="labelPosition" size="small">
      <!-- <el-radio-button label="left">左对齐</el-radio-button> -->
    </el-radio-group>
    <div style="margin: 20px;" />
    <el-form :label-position="labelPosition" label-width="80px" :model="formLabelAlign">
      <el-form-item label="科室名称">
        <el-input v-model="formLabelAlign.name" />
      </el-form-item>
      <el-form-item label="活动区域">
        <el-input v-model="formLabelAlign.region" />
      </el-form-item>
      <el-form-item label="活动形式">
        <el-input v-model="formLabelAlign.type" />
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      labelPosition: 'left',
      formLabelAlign: {
        name: '',
        region: '',
        type: ''
      }
    }
  }
}
</script>

<style lang="scss" scoped>
    #container{
        width: 90%;
        margin: 20px auto;
    }
</style>
