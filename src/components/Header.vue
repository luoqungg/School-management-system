<template>
  <el-header>
    <h1>
      <router-link to="/">学校管理系统</router-link>
    </h1>
    <div class="right">
      <el-menu
        class="el-menu-demo"
        mode="horizontal"
        background-color="#3080FE"
        text-color="#fff"
        active-text-color="#fff"
      >
        <el-menu-item index="1">
          <router-link to="/">首页</router-link>
        </el-menu-item>
        <el-menu-item index="2">
          <a href="javascript:;">反馈</a>
        </el-menu-item>
        <el-menu-item index="3">
          <a href="javascript:;">帮助</a>
        </el-menu-item>
      </el-menu>

      <div class="headinfo" v-popover:popover2>
        <img src="../assets/images/headimg.png" alt />
        <div class="title">
          <span>淘小宝</span>
          <br />
          <span>技术部</span>
        </div>

        <el-popover
          ref="popover2"
          placement="bottom"
          width="20"
          trigger="click"
          content=""
        >
          <a href="javascript:;">设置</a>
          <a href="javascript:;">退出</a>
        </el-popover>
      </div>
    </div>
  </el-header>
</template>

<script>
export default {};
</script>