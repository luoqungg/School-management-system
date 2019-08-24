<template>
  <div class="page">
    <el-button type="default" size="small" @click="prev" :disabled="prevPageDisable">上一页</el-button>
    <el-pagination
      background
      layout="pager"
      :total="100"
      :current-page="currentPage"
      @current-change="currentChange"
    ></el-pagination>
    <el-button type="default" size="small" :disabled="nextPageDisable" @click="next">下一页</el-button>
    <div class="jump">
      <span>到第</span>
      <el-input size="small" v-model="pageIndex"></el-input>
      <span>页</span>
      <el-button type="default" size="small" @click="jump">确定</el-button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      prevPageDisable: true,
      nextPageDisable: false,
      currentPage: 1,
      pageIndex: ""
    };
  },

  methods: {
    // 上一页
    prev() {
      this.currentPage--;
      this.$emit('handleLoading')
      this.isPageDisabled();
    },
    // 下一页
    next() {
      this.currentPage++;
      this.$emit('handleLoading')
      this.isPageDisabled();
    },
    // 直接跳转
    jump() {
      this.currentPage = parseInt(this.pageIndex)
      this.pageIndex = ''
      this.$emit('handleLoading') // 子组件父组件传值，触发loading
      this.isPageDisabled();
    },
    // 获取当前是第几页
    currentChange(currentPage) {
      this.currentPage = currentPage;
      this.$emit('handleLoading')
      this.isPageDisabled();
    },
    // 是否禁用分页上一页和下一页
    isPageDisabled() {
      if (this.currentPage !== 1) {
        this.prevPageDisable = false;
      } else {
        this.prevPageDisable = true;
      }

      if (this.currentPage !== 10) {
        this.nextPageDisable = false;
      } else {
        this.nextPageDisable = true;
      }
    }
  },
};
</script>