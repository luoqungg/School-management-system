<template>
  <div class="main">
    <el-card>
      <h4>月考报表</h4>
      <div class="person">
        <div v-for="item in personData" :key="item.num">
          <p>{{ item.num }}</p>
          <p>{{ item.title }}</p>
        </div>
      </div>
      <ve-line :data="chartData" :settings="chartSettings"></ve-line>
    </el-card>
  </div>
</template>

<script>
export default {
  data() {
    this.chartSettings = {
      stack: { 用户: ["访问用户", "下单用户"] },
      area: true,
      xAxisType: "time",
      min: [0],
      max: [100],
      scale: [true, true]
    };
    return {
      chartData: {
        columns: ["日期", "English", "Math"],
        rows: [
          { 日期: "2018-01", English: 0, Math: 0 },
          { 日期: "2018-02", English: 60, Math: 90 },
          { 日期: "2018-03", English: 80, Math: 10 },
          { 日期: "2018-04", English: 20, Math: 90 },
          { 日期: "2018-05", English: 70, Math: 20 },
          { 日期: "2018-06", English: 59, Math: 80 },
          { 日期: "2018-07", English: 0, Math: 0 }
        ]
      },
      personData: [
        { num: 5675, title: "及格人数" },
        { num: 7841, title: "满分人数" },
        { num: 6521, title: "不及格人数" },
        { num: 8954, title: "总人数" }
      ]
    };
  }
};
</script>