<template>
  <div id="container">
    病种名称：<el-input
      v-model="inputForm.input"
      placeholder="请输入内容"
      clearable
      class="headline"
    />
    <div style="margin: 20px 0;" />
    <el-input
      v-model="inputForm.textarea2"
      type="textarea"
      :autosize="{ minRows: 20, maxRows: 30}"
      placeholder="请输入内容"
      class="info"
    />
    <el-button type="primary" @click="add_fea()">保存</el-button>
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
    ...mapMutations(['add_fea'])
  },
  computed: {
    ...mapState(['inputForm'])
  }
}
</script>

<style lang="scss" scoped>
  #container{
    width: 1000px;
    height: 100%;
    margin: 20px auto;
  }
  .headline{
    width: 500px;
    // margin-left: 30px;
  }
  .info{
    width: 1000px;
    // margin-top:20px;
    // margin-left: 30px;
  }
  button{
    float: left;
    margin-top: 20px;
  }
</style>
