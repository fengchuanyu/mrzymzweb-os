import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters'

Vue.use(Vuex)

// https://webpack.js.org/guides/dependency-management/#requirecontext
const modulesFiles = require.context('./modules', false, /\.js$/)

// you do not need `import app from './modules/app'`
// it will auto require all vuex module from modules file
const modules = modulesFiles.keys().reduce((modules, modulePath) => {
  // set './app.js' => 'app'
  const moduleName = modulePath.replace(/^\.\/(.*)\.\w+$/, '$1')
  const value = modulesFiles(modulePath)
  modules[moduleName] = value.default
  return modules
}, {})

const store = new Vuex.Store({
  modules,
  getters,
  state: {
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
    ],
    ruleForm: {
      name: ''
    },
    rules: {
      name: [
        { required: true, message: '请输入科室名称', trigger: 'blur' }
      ]
    },
    department_Data: [
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
    ],
    inputForm: {
      input: '',
      textarea2: ''
    },
    index: 0

  },
  mutations: {
    add_dep(state) {
      var dep_name = state.ruleForm.name
      console.log(dep_name)
      state.department_Data.push({
        department_name: dep_name
      })
      console.log(state.department_Data)
      alert('添加成功!!!')
      // this.$message({
      //   message: '添加成功',
      //   type: 'success'
      // });
    },
    add_fea(state) {
      var fea_name = {
        input: state.inputForm.input,
        textarea2: state.inputForm.textarea2
      }
      state.tableData.push({
        illness_name: fea_name.input,
        illness_content: fea_name.textarea2
      })
      console.log(state.tableData)
      alert('添加成功!!!')
    },
    clear(state) {
      state.ruleForm.name = ''
    },
    del_dep(state, index) {
      console.log(index)
      state.department_Data.splice(index, 1)
    },
    del_fea(state, index) {
      state.tableData.splice(index, 1)
    }
  }

})

export default store
