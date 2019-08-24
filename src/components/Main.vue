<template>
  <el-main>
    <component :is="componentId"></component>
    <footer>
      <h1><router-link to="/">学校管理系统</router-link></h1>
      <p>&copy; copyright by ailocy</p>
    </footer>
  </el-main>
</template>

<script>
import Dashboard from './dashboard/Dashboard'
import Users from './users/Users'
import Paper from './paper/Paper'
import Add from './add/Add'
import Setting from './setting/Setting'
export default {
  computed: {
    componentId() {
      return this.$route.name
    }
  },
  components: {
    Dashboard,
    Users,
    Paper,
    Add,
    Setting
  }
}
</script>


