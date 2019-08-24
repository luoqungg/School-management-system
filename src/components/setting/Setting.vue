<template>
  <div class="setting">
    <el-card>
      <h2>个人设置</h2>
      <el-form
        :model="form"
        ref="settingForm"
        label-width="150px"
        class="demo-ruleForm"
        :rules="rules"
      >
        <!-- 姓名 -->
        <el-form-item label="姓名：" prop="name">
          <el-input type="text" size="small" v-model="form.name"></el-input>
        </el-form-item>

        <!-- 头像 -->
        <el-form-item label="头像：" prop="imageList">
          <el-upload
            action="https://jsonplaceholder.typicode.com/posts/"
            list-type="picture-card"
            :on-remove="handleRemove"
            :on-change="upload"
          >
            <i class="el-icon-plus"></i>
          </el-upload>
        </el-form-item>

        <!-- 性别 -->
        <el-form-item label="性别：">
          <el-radio v-model="form.radio" label="1">男</el-radio>
          <el-radio v-model="form.radio" label="2">女</el-radio>
        </el-form-item>

        <!-- swich 开关 -->
        <el-form-item label="通知：">
          <el-switch v-model="swich" active-color="#1861D5" inactive-color="#F2F3F7" :width="50"></el-switch>
        </el-form-item>

        <!-- 邮箱验证 -->
        <el-form-item label="邮箱：" prop="email">
          <el-input type="emial" size="small" placeholder="abcdefg123@qq.com" v-model="form.email"></el-input>
        </el-form-item>

        <el-form-item label="网站地址：" prop="webUrl">
          <el-input type="text" size="small" placeholder="http://www.baidu.com" v-model="form.webUrl"></el-input>
        </el-form-item>
        <el-form-item label="Github：" prop="webUrl">
          <el-input type="text" size="small" placeholder="https://github.com/luoqungg" v-model="form.github"></el-input>
        </el-form-item>
        <el-form-item label="Twitter：" prop="webUrl">
          <el-input type="text" size="small" placeholder="https://github.com/luoqungg" v-model="form.twitter"></el-input>
        </el-form-item>
        <el-form-item label="自我描述：">
          <el-input type="textarea" size="small" resize="none" v-model="form.introduce" :autosize="{minRows:3, maxRows: 6}"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" size="small" @click="submitForm('settingForm')">更新设置</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script>
export default {
  data() {
    // 必填
    let beRequired = (rule, value, callback) => {
      if (!value) {
        return callback(new Error("必填"));
      } else {
        callback();
      }
    };

    // 邮箱验证
    let emailValidate = (rule, value, callback) => {
      if(!(/^[a-zA-Z0-9_.-]+@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*\.[a-zA-Z0-9]+$/).test(value)) {
        return callback(new Error('请填写正确的邮箱'))
      } else {
        callback()
      }
    }

    // url 验证
    let urlValidate = (rule, value, callback) => {
      if (!(/^((https|http|ftp|rtsp|mms)?:\/\/)([a-zA-Z0-9]+\.)+[a-zA-Z0-9_-~]{2,6}/).test(value)) {
        return callback(new Error('请填写正确的网址'))
      } else {
        return callback(new Error(''))
      }
    }
    
    // 上传图片验证
    let imageValidate = (rule, value, callback) => {
      if (value.length == 0) {
        return callback(new Error('必填'))
      }
    }
    return {
      // 表单内部数据
      form: {
        name: "",
        imageUrl: "",
        radio: "1",
        email: "",
        webUrl: '',
        github: '',
        twitter: '',
        imageList: [],
        introduce: ''
      },
      // 验证规则
      rules: {
        name: [{ validator: beRequired, trigger: "blur" }],
        imageList: [{ validator: imageValidate, trigger: "change" }],
        email: [{ validator: emailValidate, trigger: 'blur' }],
        webUrl: [{ validator: urlValidate, trigger: 'blur' }]
      },
      swich: false
    };
  },
  methods: {
    // 图片验证
    handleRemove(file, fileList) {
      this.$refs.settingForm.validateField("imageList");
    },
    upload(file, fileList) {
      this.form.imageList = fileList;
      this.$refs.settingForm.validateField("imageList");
    },

    // 表单验证
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          alert("submit!");
        } else {
          return false;
        }
      });
    }
  }
};
</script>