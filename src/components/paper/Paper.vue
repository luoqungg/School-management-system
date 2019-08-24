<template>
  <div class="paper">
    <el-card>
      <h4>精确筛选</h4>
      <ul class="specialty">
        <span>专业：</span>
        <li
          v-for="(item, i ) in specialty"
          :key="item"
          :class="{'current': specialtyIndex === i }"
          @click="specialtyIndex = i"
        >{{ item }}</li>
      </ul>

      <ul class="specialty">
        <span>科目：</span>
        <li
          v-for="(item, i ) in subjects"
          :key="item"
          :class="{'current': subjectsIndex === i }"
          @click="subjectsIndex = i"
        >{{ item }}</li>
      </ul>
    </el-card>

    <el-card>
      <h4>试卷列表</h4>

      <ul class="paperlist">
        <ol v-for="(item, i) in paperList" :key="i" type="num">
          <h5>
            <span>{{ i + 1 }}.</span>
            {{ item.title }}
          </h5>
          <div class="content">
            <div class="left">
              <span>阅卷方式：人工</span>
              <span>时间：{{ item.time }}</span>
              <span>引用次数：{{ i+1 }}</span>
              <span>分值：{{ item.score }}</span>
              <span>技术方向：自然语言</span>
              <span>题目：20</span>
            </div>
            <div class="right">
              <i class="el-icon-edit">编辑</i>
              <i class="el-icon-delete">删除</i>
              <i class="el-icon-success">归档</i>
            </div>
          </div>
        </ol>
      </ul>
    </el-card>

    <PageList></PageList>
  </div>
</template>

<script>
import PageList from '../commonsub/PageList'
export default {
  data() {
    return {
      specialtyIndex: 0,
      subjectsIndex: 0,
      specialty: [
        "全部",
        "软件",
        "土木",
        "外语",
        "机械",
        "经济学",
        "管理学",
        "市场营销"
      ],
      subjects: ["全部", "英语", "数学", "材料力学", "机械原理"],
      paperList: [
        {
          title: "这里是试卷名称",
          time: "2018-6-10",
          score: 90
        },
        {
          title: "这里是试卷名称",
          time: "2018-6-10",
          score: 90
        },
        {
          title: "这里是试卷名称",
          time: "2018-6-10",
          score: 90
        },
        {
          title: "这里是试卷名称",
          time: "2018-6-10",
          score: 90
        },
        {
          title: "这里是试卷名称",
          time: "2018-6-10",
          score: 90
        },
        {
          title: "这里是试卷名称",
          time: "2018-6-10",
          score: 90
        },
        {
          title: "这里是试卷名称",
          time: "2018-6-10",
          score: 90
        },
        {
          title: "这里是试卷名称",
          time: "2018-6-10",
          score: 90
        },
        {
          title: "这里是试卷名称",
          time: "2018-6-10",
          score: 90
        },
        {
          title: "这里是试卷名称",
          time: "2018-6-10",
          score: 90
        }
      ]
    };
  },
  components: {
    PageList
  }
};
</script>