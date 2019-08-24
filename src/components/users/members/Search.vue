<template>
  <div class="search">
    <el-card>
      <h4>搜索</h4>
      <el-form v-model="form" :inline="true">
        <el-form-item label="学校:">
          <el-select v-model="form.college" placeholder="请选择" size="small">
            <el-option label="浙江大学" value="zhejiang"></el-option>
            <el-option label="上海复旦" value="shanghai"></el-option>
            <el-option label="中山大学" value="guangzhou"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="院系:">
          <el-select v-model="form.department" placeholder="请选择" size="small">
            <el-option label="计算机学院" value="jisuanji"></el-option>
            <el-option label="设计学院" value="sheji"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="班级:">
          <el-input size="small" v-model="form.grade"></el-input>
        </el-form-item>

        <el-form-item label="姓名:">
          <el-input size="small" v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item label="电话:">
          <el-input size="small" v-model="form.phone"></el-input>
        </el-form-item>
        <el-form-item label="角色:">
          <el-input size="small" v-model="form.role"></el-input>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>


<script>
export default {
  data() {
    return {
      form: {
        college: '',
        departement: '',
        name: '',
        phone: '',
        role: '',
        grade: ''
      }
    };
  }
};
</script>