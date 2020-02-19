<template>
  <div>
    <h2>User</h2>
    <p>I'm the content of User</p>
    <p>{{$route.params.userId}}</p>
    <p>{{userId}}</p>
  </div>
</template>

<script>
export default {
  name:"User",
  computed:{
    userId(){
      return this.$route.params.userId
    }
  }
}
</script>

<style>

</style>