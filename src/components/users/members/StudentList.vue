<template>
  <div class="student">
    <el-card>
      <h4>学生列表</h4>
      <div class="button-student">
        <el-button type="primary" size="medium" icon="el-icon-plus">添加学生</el-button>
        <el-button type="info" plain :disabled="topRightButton" size="medium">批量删除</el-button>
      </div>

      <div class="table-student">
        <el-table
          ref="multipleTable"
          v-loading="loading"
          :data="tableData"
          style="width: 100%"
          border
          @selection-change="handleSelectionChange"
          
        >
          <!-- 多选框 -->
          <el-table-column type="selection" align="center" width="50"></el-table-column>

          <el-table-column type="index" align="center" label="序号" width="60"></el-table-column>
          <el-table-column prop="name" label="姓名"></el-table-column>
          <el-table-column prop="school" label="学校"></el-table-column>
          <el-table-column prop="department" label="院系"></el-table-column>
          <el-table-column prop="grade" label="班级" width="60" align="center"></el-table-column>
          <el-table-column prop="phone" label="电话"></el-table-column>
          <el-table-column label="启用/停用" width="100" align="center">
            <template slot-scope="scope">
              <!-- 开关 -->
              <Swich :scope="scope"></Swich>
            </template>
          </el-table-column>
          <el-table-column label="操作" width="80" align="center">
            <template>
              <el-button size="medium" type="text" icon="el-icon-edit" @click="edit"></el-button>
              <el-button size="medium" type="text" icon="el-icon-delete" @click="del"></el-button>
            </template>
          </el-table-column>
        </el-table>
      </div>
      <!-- 分页 -->
      <PageList :isLoading="loading" @handleLoading="handlePageLoading"></PageList>
    </el-card>
  </div>
</template>

<script>
import PageList from "../../commonsub/PageList";
import Swich from "../../commonsub/Swich";
export default {
  data() {
    return {
      loading: false,
      topRightButton: true,
      selected: false,
      tableData: [
        {
          name: "王小虎",
          school: "浙江大学",
          department: "计算机学院",
          phone: "136xxxx8140",
          grade: 1,
          role: "学生",
          on: 0,
          off: 1,
        },
        {
          name: "王小虎",
          school: "浙江大学",
          department: "计算机学院",
          phone: "136xxxx8140",
          grade: 2,
          role: "学生",
          on: 0,
          off: 1,
        },
        {
          name: "王小虎",
          school: "浙江大学",
          department: "计算机学院",
          phone: "136xxxx8140",
          grade: 3,
          role: "学生",
          on: 0,
          off: 1,
        },
        {
          name: "王小虎",
          school: "浙江大学",
          department: "计算机学院",
          phone: "136xxxx8140",
          grade: 4,
          role: "学生",
          on: 0,
          off: 1,
        },
        {
          name: "王小虎",
          school: "浙江大学",
          department: "计算机学院",
          phone: "136xxxx8140",
          grade: 5,
          role: "学生",
          on: 0,
          off: 1,
        },
        {
          name: "王小虎",
          school: "浙江大学",
          department: "计算机学院",
          phone: "136xxxx8140",
          grade: 6,
          role: "学生",
          on: 0,
          off: 1,
        },
        {
          name: "王小虎",
          school: "浙江大学",
          department: "计算机学院",
          phone: "136xxxx8140",
          grade: 7,
          role: "学生",
          on: 0,
          off: 1,
        },
        {
          name: "王小虎",
          school: "浙江大学",
          department: "计算机学院",
          phone: "136xxxx8140",
          grade: 8,
          role: "学生",
          on: 0,
          off: 1,
        },
        {
          name: "王小虎",
          school: "浙江大学",
          department: "计算机学院",
          phone: "136xxxx8140",
          grade: 9,
          role: "学生",
          on: 0,
          off: 1,
        },
        {
          name: "王小虎",
          school: "浙江大学",
          department: "计算机学院",
          phone: "136xxxx8140",
          grade: 10,
          role: "学生",
          on: 0,
          off: 1,
        }
      ],
      multipleSelection: []
    };
  },

  methods: {
    // 多选框
    handleSelectionChange(val) {
     
      this.multipleSelection = val;
      if (this.multipleSelection.length !== 0) {
        this.topRightButton = false;
      } else {
        this.topRightButton = true
      }

      console.log(this.multipleSelection)
    },



    // 设置loading
    handleLoading() {
      this.loading = true;
      setTimeout(() => {
        this.loading = false;
      }, 1000);
    },
    // 分页触发loading
    handlePageLoading() {
      this.handleLoading();
    },
    // 编辑
    edit() {
      this.$confirm("请申请管理员权限", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      }).catch(e => {});
    },
    //删除
    del() {
      this.$confirm("确认删除嘛?", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      }).catch(e => {});
    }
  },
  components: {
    PageList,
    Swich
  },
  created() {
    this.handleLoading();
  },
  computed: {
  }
};
</script>