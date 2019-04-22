<template>
  <div>
    <div class="addoffice">
      <el-input v-model="input3" placeholder="添加科室">
        <template slot="prepend">
          <svg-icon icon-class="user" />
        </template>
      </el-input>
    </div>
    <el-button type="primary">确认添加</el-button>
    <el-table :data="tableData" style="width: 100%">
      <el-table-column prop="name" label="科室名称" width="980" />
      <el-table-column prop="action" label="操作">
        <template slot-scope="scope">
          <el-button type="text" size="small" @click="handleClick(scope.row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tableData: [
        {
          title: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        },
        {
          title: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1517 弄'
        },
        {
          title: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄'
        },
        {
          title: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄'
        }
      ]
    }
  },
  methods: {
    handleClick(row) {
      console.log(row)
    }
  }
}
</script>

<style lang="scss" scoped>
.addoffice {
    width: 80%;
  display: inline-block;
}
</style>
