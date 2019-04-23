<template>
  <div id="container">
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
        <el-button
          size="mini"
          style="margin:0 10px;"
          @click="handleEdit(scope.$index, scope.row)"
        >编辑</el-button>
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
          illness_name: '不孕症',
          illness_content: '不孕的医学定义为一年未采取任何避孕措施，性生活正常（每周两次及以上）而没有怀孕。主要分为原发不孕及继发不孕。原发不孕为从未受孕；继发不孕为曾经怀过孕。根据这种严格的定义，不孕是一种常见的问题，大约影响到至少10%～15%的育龄夫妇。引起不孕的发病原因分为男性不孕和女性不孕。'

        },
        {
          illness_name: '月经不调',
          illness_content: '月经失调也称月经不调，是妇科常见疾病，表现为月经周期或出血量的异常，可伴月经前、月经时的腹痛及其他的全身症状。病因可能是器质性病变或是功能失常。'

        },
        {
          illness_name: '盆腔炎性疾病',
          illness_content: '盆腔炎性疾病（pelvicinflammatorydisease，PID）指一组女性上生殖道的感染性疾病，主要包括子宫内膜炎、输卵管炎、输卵管卵巢脓肿（TOA）、盆腔腹膜炎。炎症可局限于一个部位，也可同时累及几个部位，最常见的是输卵管炎。'

        },
        {
          illness_name: '痛经',
          illness_content: '痛经(dysmenorrhea)为最常见的妇科症状之一，指行经前后或月经期出现下腹部疼痛、坠胀，伴有腰酸或其他不适，症状严重影响生活质量者。痛经分为原发性痛经和继发性两类，原发性痛经指生殖器官无器质性病变的痛经；继发性痛经指由盆腔器质性疾病，如子宫内膜异位症、子宫腺肌病等引起的痛经。'

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
  #container{
    width: 90%;
    margin: 50px auto;
  }
</style>
