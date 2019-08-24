<template>
  <div id="app">
    <Header></Header>
    <el-container>
      <Aside></Aside>
      <router-view />
    </el-container>
  </div>
</template>

<script>
import Header from "./components/Header";
import Aside from "./components/Aside";
export default {
  name: "App",
  components: {
    Header,
    Aside
  }
};
</script>

<style>
</style>
