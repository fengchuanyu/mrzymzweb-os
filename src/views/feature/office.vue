<template>
  <div id="container">
    <el-button id="add_dep" type="primary" @click="go()">添加科室</el-button>
    <el-table
      :data="tableData"
      border
      style="width: 100%"
    >
      <el-table-column
        prop="department_name"
        label="科室名称"
      />
      <el-table-column
        label="操作"
        width="180"
      >
        <el-button
          size="mini"
          type="danger"
          @click="handleDelete(scope.$index, scope.row)"
        >删除</el-button>
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
          department_name: '妇科'
        },
        {
          department_name: '内科'
        },
        {
          department_name: '康复科'
        },
        {
          department_name: '外科'
        }

      ]
    }
  },
  methods: {
    handleClick(row) {
      console.log(row)
    },
    go() {
      this.$router.push('/add_department')
    }
  }
}
</script>

<style lang="scss" scoped>
// .addoffice {
//     width: 80%;
//   display: inline-block;
// }
  #container{
    width: 90%;
    margin: 50px auto;
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
    margin: 0 50px;
  }
  #add_dep{
    float: right;
    margin-bottom: 30px;
  }
</style>
