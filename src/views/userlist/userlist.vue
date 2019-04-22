<template>
  <div>
    <template>
      <el-table :data="tableData" style="width: 100%">
        <el-table-column prop="name" label="用户" width="280" />
        <el-table-column prop="phone" label="用户联系方式" width="280" />
        <el-table-column prop="date" label="用户创建日期" width="280" />
        <el-table-column prop="action" label="操作">
          <template slot-scope="scope">
            <el-button type="text" size="small" @click="handleClick(scope.row)">查看详情</el-button>
            <el-button type="text" size="small">病历管理</el-button>
          </template>
        </el-table-column>
      </el-table>
    </template>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tableData: [
        {
          phone: '2016-05-02',
          name: '王小虎',
          date: '2016-05-02'
        },
        {
          phone: '2016-05-04',
          name: '王小虎',
          date: '2016-05-02'
        },
        {
          phone: '2016-05-01',
          name: '王小虎',
          date: '2016-05-02'
        },
        {
          phone: '2016-05-03',
          name: '王小虎',
          date: '2016-05-02'
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
</style>
