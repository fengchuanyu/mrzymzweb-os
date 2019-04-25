<template>
  <div id="container">
    <el-button id="add_dep" type="primary" @click="go_dep()">添加科室</el-button>
    <el-table
      :data="department_Data"
      border
      style="width: 100%"
    >
      <el-table-column
        prop="department_name"
        label="科室名称"
      />
      <el-table-column
        type="index"
        label="操作"
        width="180"
      >
        <template slot-scope="scope">
          <el-button
            size="mini"
            type="danger"
            @click="del_dep(scope.$index)"
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
    ...mapMutations(['del_dep']),
    go_dep() {
      this.$router.push({ path: 'add_department' })
    }
    // del_dep(index)
    // {
    //   console.log(index);
    // }

  },
  computed: mapState({
    department_Data: state => state.department_Data
  })
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
