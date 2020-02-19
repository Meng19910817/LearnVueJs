<template>
  <div id="app">
    <img src="./assets/logo.png">
    <HelloWorld/>
    <button @click="itmeclick">click</button>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld'
import {request} from "./network/index"

export default {
  name: 'App',
  components: {
    HelloWorld
  },
  methods:{
    itmeclick(){
      //1.
      // const object = {
      //   url:"/home/multidata"
      // }
      // request(object, function(res){
      //   console.log(res)
      // },
      // function(error){
      //   console.log(res)
      // })
      //2.
      // const object = {
      //   url:"/home/multidata",
      //   success:function(res){
      //     console.log(res)
      //   },
      //   failure:function(err){
      //     console.log(err)
      //   }
      // }
      // request(object)
      //3.
      request(object).then(res=>{
        console.log(res)
      }).catch(err=>{
        console.log(err)
      })
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
