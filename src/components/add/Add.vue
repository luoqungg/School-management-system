<template>
  <div class="add">
    <el-card>
      <h2>添加学生</h2>
      <el-form :model="form" ref="validateForm" label-width="100px" class="demo-ruleForm" :rules="rules">
        <el-form-item prop="name" label="姓名" >
          <el-input v-model="form.name" auto-complete="off" size="small" placeholder="淘小宝"></el-input>
        </el-form-item>

        <el-form-item prop="radio" label="性别">
          <el-radio v-model="form.radio" label="1">男</el-radio>
          <el-radio v-model="form.radio" label="2">女</el-radio>
        </el-form-item>

        <el-form-item label="年级" prop="selectValue" >
          <el-select v-model="form.selectValue" placeholder="请选择" size="small">
            <el-option v-for="item in form.grade" :key="item" :label="item" :value="item"></el-option>
          </el-select>
        </el-form-item>

        <el-form-item prop="phone" label="联系电话" >
          <el-input v-model="form.phone" auto-complete="off" size="small"></el-input>
        </el-form-item>

        <el-form-item prop="depart" label="院系" >
          <el-input v-model="form.depart" auto-complete="off" placeholder="计算机学院" size="small"></el-input>
        </el-form-item>

        <el-form-item>
          <el-button type="primary" @click="submit('validateForm')">提交</el-button>
        </el-form-item>
      </el-form>
    </el-card>

    <transition name="el-fade-in-linear">
      <div class="message" v-show="successShow">
        <i class="el-icon-success"></i>
      </div>
    </transition>
  </div>
</template>

<script>
import { resolve } from "q";
export default {
  data() {
    let beRequired = (rule, value, callback) => {
      if (!value) {
        return callback(new Error("必填"));
      } else {
        callback();
      }
    };
    return {
      form: {
        name: "",
        radio: "1",
        grade: ["大一", "大二", "大三", "大四"],
        phone: "",
        depart: "",
        selectValue: ""
      },
      rules: {
        name: [{ validator: beRequired, trigger: "blur" }],
        phone: [{ validator: beRequired, trigger: "blur" }],
        depart: [{ validator: beRequired, trigger: "blur" }],
        selectValue: [{ validator: beRequired, trigger: "blur" }],
      },
      successShow: false,
      flag: true
    };
  },
  methods: {
    submit(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          this.successShow = true;
          if (this.flag) {
            this.flag = false;
            setTimeout(() => {
              this.successShow = false;
              this.flag = true;
            }, 2000);
          }
        } else {
          return false
        }
      });
    }
  }
};
</script>