<template>
  <div id="container">
    <el-button id="add_feature" type="primary" @click="go_addfeature()">添加诊疗</el-button>
    <el-table
      :data="tableData"
      border
      style="width: 100%"
    >
      <el-table-column
        prop="illness_name"
        label="病症名称"
        width="180"
      />
      <el-table-column
        prop="illness_content"
        label="病症详情"
      />
      <el-table-column
        prop="date"
        label="操作"
        width="180"
      >
        <template slot-scope="scope">
          <el-button
            id="del"
            size="mini"
            type="danger"
            @click="del_fea(scope.$index)"
          >删除</el-button>
        </template>
      </el-table-column>
    </el-table>
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
    ...mapMutations(['del_fea']),
    go_addfeature() {
      this.$router.push({ path: 'addfeature' })
    }
  },
  computed: {
    ...mapState(['tableData', 'inputForm'])
  }
}
</script>

<style lang="scss" scoped>
  #container{
    width: 90%;
    margin: 50px auto;
  }
  #del{
    margin: 0 50px;
  }
  #add_feature{
    float: right;
    margin-bottom: 30px;
  }
</style>
