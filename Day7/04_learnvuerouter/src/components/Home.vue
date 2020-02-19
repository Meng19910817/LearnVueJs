<template>
  <div>
    <h2>Home</h2>
    <p>I'm the content of Home</p>
    <router-link to="/home/news">News</router-link>
    <router-link to="/home/message">Messages</router-link>
    <router-view></router-view>
  </div>
</template>
<script>
export default {
  name: "Home",
  data(){
    return {
      path:"/home/news"
    }
  },
  created(){
    console.log("created")
    document.title = "Home"
    //It could be also editted by router.beforeEach()
  },
  mouted(){
    console.log("it works when rendering dom")
  },
  update(){
    console.log("it works when updating dom")
  },
  destroyed(){
    console.log("it works when the component dead")
  },
  activated(){
    this.$router.push(this.path)
    console.log("it only works when components are arounded by <keep-alive>")
  },
  deactivated(){
    
    //console.log("it only works when components are arounded by <keep-alive>")
  },
  beforeRouteLeave(to, from ,next) {  
    //console.log(this.$route)
    this.path = this.$route.path
    next() 
  }
}
</script>