<template>
  <div class="sendcontent">
    发布病例
    <!-- <div>
      <div class="sendcase">
        <el-input placeholder="病历名称" v-model="input3">
          <template slot="prepend">
            <svg-icon icon-class="user"/>
          </template>
        </el-input>
      </div>
      <h3>科室:</h3>
      <el-select v-model="value4" clearable placeholder="请选择">
        <el-option v-for="item in office" :key="item.value" :label="item.label" :value="item.value"></el-option>
      </el-select>
      <h3>医生:</h3>
      <el-select v-model="value4" clearable placeholder="请选择">
        <el-option v-for="item in doctor" :key="item.value" :label="item.label" :value="item.value"></el-option>
      </el-select>
      <h3>病人:</h3>
      <el-select v-model="value4" clearable placeholder="请选择">
        <el-option v-for="item in doctor" :key="item.value" :label="item.label" :value="item.value"></el-option>
      </el-select>
      <el-button type="primary">选择科室医生搜索病历</el-button>
    </div> -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      value4: ''
    }
  }
}
</script>

<style lang="scss" scoped>
.sendcontent {
  width: 100%;
}
.sendcase {
  width: 50%;
  display: block;
}
h3 {
  display: inline-block;
}
</style>
