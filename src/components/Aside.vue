<template>
  <el-aside width="240px" height="100%">
    <el-row class="tac">
      <el-col>
        <el-menu :default-active="$route.path" class="el-menu-vertical-demo" :router="true">
          <el-menu-item index="/dashboard">我的工作台</el-menu-item>
          <el-menu-item index="/users" >学生管理</el-menu-item>
          <el-menu-item index="/paper">试卷管理</el-menu-item>
          <el-menu-item index="/add" >添加学生</el-menu-item>
          <el-menu-item index="/setting">个人设置</el-menu-item>
        </el-menu>
      </el-col>
    </el-row>
  </el-aside>
</template>