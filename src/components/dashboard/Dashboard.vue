<template>
  <div class="dashboard">
    <Top></Top>
    <Main></Main>
  </div>
</template>


<script>
import Top from './members/DashboardTop'
import Main from './members/DashboardMain'
export default {
  data() {
    return {
      
    }
  },
  components: {
    Top,
    Main
  }
};
</script>