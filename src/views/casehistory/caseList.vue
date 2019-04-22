<template>
  <div>
    <h3>科室:</h3>
    <el-select v-model="value4" clearable placeholder="请选择">
      <el-option v-for="item in office" :key="item.value" :label="item.label" :value="item.value" />
    </el-select>
    <h3>医生:</h3>
    <el-select v-model="value4" clearable placeholder="请选择">
      <el-option v-for="item in doctor" :key="item.value" :label="item.label" :value="item.value" />
    </el-select>
    <el-button type="primary">选择科室医生搜索病历</el-button>
    <el-table ref="filterTable" :data="tableData" style="width: 100%">
      <el-table-column
        prop="name"
        label="就诊人姓名"
        sortable
        width="180"
        column-key="date"
        :filters="[{text: '2016-05-01', value: '2016-05-01'}, {text: '2016-05-02', value: '2016-05-02'}, {text: '2016-05-03', value: '2016-05-03'}, {text: '2016-05-04', value: '2016-05-04'}]"
        :filter-method="filterHandler"
      />
      <el-table-column prop="name" label="科室" width="180" />
      <el-table-column prop="address" label="医生" />
      <el-table-column prop="address" label="病情描述" />
      <el-table-column prop="address" label="就诊日期" />
      <el-table-column prop="action" label="操作">
        <template slot-scope="scope">
          <el-button type="text" size="small" @click="handleClick(scope.row)">编辑</el-button>
          <el-button type="text" size="small">删除</el-button>
          <el-button type="text" size="small">留言</el-button>
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
        // 表格信息
        {
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄',
          tag: '家'
        },
        {
          name: '王小虎',
          address: '上海市普陀区金沙江路 1517 弄',
          tag: '公司'
        },
        {
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄',
          tag: '家'
        },
        {
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄',
          tag: '公司'
        }
      ],
      doctor: [
        {
          value: '选项1',
          label: '黄金糕'
        },
        {
          value: '选项2',
          label: '双皮奶'
        },
        {
          value: '选项3',
          label: '蚵仔煎'
        }
      ],
      office: [
        {
          value: '选项1',
          label: '黄金糕'
        },
        {
          value: '选项2',
          label: '双皮奶'
        },
        {
          value: '选项3',
          label: '蚵仔煎'
        }
      ],
      value4: ''
    }
  },
  methods: {
    handleClick(row) {
      console.log(row)
    },
    resetDateFilter() {
      this.$refs.filterTable.clearFilter('date')
    },
    clearFilter() {
      this.$refs.filterTable.clearFilter()
    },
    formatter(row, column) {
      return row.address
    },
    filterTag(value, row) {
      return row.tag === value
    },
    filterHandler(value, row, column) {
      const property = column['property']
      return row[property] === value
    }
  }
}
</script>

<style lang="scss" scoped>
h3 {
  display: inline;
}
</style>
