<template>
  <div class="users">
    <Search></Search>
    <StudentList></StudentList>
  </div>
</template>

<script>
import Search from './members/Search'
import StudentList from './members/StudentList'
export default {
  components: {
    Search,
    StudentList
  }
}
</script>