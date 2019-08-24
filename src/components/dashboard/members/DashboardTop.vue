<template>
  <div class="top">
    <el-card class="box-card" v-for="(item) in data" :key="item.num">
      <div class="content">
        <div class="imgbox">
          <img :src="item.src" alt />
        </div>
        <div>
          <p>{{ item.num }}</p>
          <p>{{ item.name }}</p>
        </div>
      </div>
    </el-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      data: [
        {
          name: "待审批课件",
          num: 30,
          src: require("../../../assets/images/dashboard-top-1.png")
        },
        {
          name: "待批改作业",
          num: 120,
          src: require("../../../assets/images/dashboard-top-2.png")
        },
        {
          name: "待批阅试卷",
          num: 160,
          src: require("../../../assets/images/dashboard-top-3.png")
        },
        {
          name: "带评分实训",
          num: 69,
          src: require("../../../assets/images/dashboard-top-4.png")
        },
        {
          name: "已审核课件",
          num: 85,
          src: require("../../../assets/images/dashboard-top-5.png")
        },
        {
          name: "已批改作业",
          num: 93,
          src: require("../../../assets/images/dashboard-top-6.png")
        },
        {
          name: "已批阅试卷",
          num: 185,
          src: require("../../../assets/images/dashboard-top-7.png")
        },
        {
          name: "已评分实训",
          num: 235,
          src: require("../../../assets/images/dashboard-top-8.png")
        }
      ],
    };
  }
};
</script>