<template>
  <div id="container">
    <el-form ref="ruleForm" :model="ruleForm" :rules="rules" label-width="100px" class="demo-ruleForm">
      <el-form-item label="科室名称" prop="name">
        <el-input v-model="ruleForm.name" />
      </el-form-item>
      <el-form-item>
        <el-button type="primary" :plain="true" @click="add_dep()">立即创建</el-button>
        <el-button @click="clear()">重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
export default {
  data() {
    return {

    }
  },
  methods: {
    // submitForm(formName) {
    //   this.$refs[formName].validate((valid) => {
    //     if (valid) {
    //       // alert('submit!');
    //       console.log(this.name);
    //     } else {
    //       console.log('error submit!!');
    //       return false;
    //     }
    //   });
    // },
    //   resetForm(formName) {
    //     this.$refs[formName].resetFields();
    //   },
    ...mapMutations(['add_dep', 'clear'])
  },
  computed: {
    ...mapState(['ruleForm', 'rules'])
  }
}
</script>

<style lang="scss" scoped>
    #container{
        width: 50%;
        margin: 100px auto;
    }
</style>
