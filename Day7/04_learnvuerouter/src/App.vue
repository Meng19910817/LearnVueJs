<template>
  <div id="app">
    <!-- <router-link to="/home" tag="button" active-class="active" replace>Home</router-link>
    <router-link to="/about" tag="div" active-class="active" replace>About</router-link> -->
    <router-link to="/home" tag="button" replace>Home</router-link>
    <router-link to="/about" tag="div" replace>About</router-link>
    <router-link :to="'/user/'+ userId" tag="button" replace>User</router-link>
    <router-link :to="{path:'/profile',query:{name:'Mengyu'}}" replace>Profile</router-link>
    <!-- <button @click="homeClick" >Home</button>
    <button @click="aboutClick">About</button> -->
    <!-- <button @click="profileClick">Profile2</button> -->
    <keep-alive>
      <!--when using <keep-alive> the components are cached-->
      <router-view></router-view>
    </keep-alive>
    
  </div>
</template>

<script>

export default {
  name: 'App',
  methods:{
    homeClick(){
      //push=>pushState()
      this.$router.push("/home")

      //replace=>repalceState

      //this.$router.replace("/about")
    },
    aboutClick(){
      //this.$router.replace("/about")
      this.$router.push("/about")
    },
    profileClick(){
      this.$router.replace({
        path:"/profile",
        query:{
          name:this.name
        }
      })
    }
  },
  data(){
    return {
      userId: "Echo",
      name: "Mengyu"
    }
  }
}
</script>

<style scoped>
.active{
  color:red
}
.router-link-active{
  color:red
}

.title{
  color:green
}
</style>