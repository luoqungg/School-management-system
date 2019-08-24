<template>
  <el-switch
    v-model="scope.row.on"
    active-color="#1861D5"
    active-value="1"
    inactive-color="#F2F3F7"
    inactive-value="0"
    :width="50"
  ></el-switch>
</template>

<script>
export default {
  props: {
    scope: Object
  }
}
</script>