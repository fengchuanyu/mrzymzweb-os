<template>
  <div>
    <div>
      <el-table ref="filterTable" :data="tableData" class="formStyle" style="width: 95%">
        <el-table-column prop="name" label="医生姓名" />
        <el-table-column prop="department" label="医生所在科室" />
        <el-table-column prop="job" label="医生职称" />
        <el-table-column prop="money" label="挂号金额" />
        <el-table-column prop="introduction" label="医生简介" />
        <el-table-column prop="action" label="操作">
          <template slot-scope="scope">
            <el-button type="text" size="small" @click="handleClick(scope.row)">编辑</el-button>
            <el-button type="text" size="small">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <el-popover
      placement="right"
      trigger="click"
    >
      <el-table :data="gridData">
        <el-table-column width="150" property="date" label="日期" />
        <el-table-column width="100" property="name" label="姓名" />
        <el-table-column width="300" property="address" label="地址" />
      </el-table>
      <el-button slot="reference">click 激活</el-button>
    </el-popover>

  </div>
</template>

<script>
export default {
  data() {
    return {
      tableData: [
        {
          name: '韩凤娟',
          department: '妇科',
          job: '博士研究生导师',
          money: 60,
          introduction: 'asd555555555asdasd'
        },
        {
          name: '韩凤娟',
          department: '妇科',
          job: '博士研究生导师',
          money: 60,
          introduction: 'asdasdasd'
        },
        {
          name: '韩凤娟',
          department: '妇科',
          job: '博士研究生导师',
          money: 60,
          introduction: 'asdasdasd'
        },
        {
          name: '韩凤娟',
          department: '妇科',
          job: '博士研究生导师',
          money: 60,
          introduction: 'asdasdasd'
        },
        {
          name: '韩凤娟',
          department: '妇科',
          job: '博士研究生导师',
          money: 60,
          introduction: 'asdasdasd'
        }
      ],
      gridData: [{
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-04',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-01',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-03',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }]
    }
  },
  methods: {
    handleClick(row) {
      console.log(row)
      this.$router.push({
        path: '/doctor/adddoctor',
        query: {
          id: row.name,
          money: row.money,
          job: row.job,
          introduction: row.introduction,
          department: row.department
        }
      })
    }
  }

}
</script>

<style lang="scss" scoped>
.formStyle{
  margin:25px 0;
  margin-left: 2.5%;
  border: 1px solid #ccc;
  background: #ffffff;
}
// #f0f2f5

</style>

