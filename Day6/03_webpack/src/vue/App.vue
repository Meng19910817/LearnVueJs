<template>
 <div>
    <h2 class="title">{{message}}</h2>
    <button @click="btnClick">BTN</button>
    <h2>{{name}}</h2>
  </div>
</template>

<script>
export default {
  name:"cpn",
  data(){
    return {
      message:"Hello, vue.js",
      name:"Mengyu Zou"
    }
  },
  methods:{
    btnClick(){
      console.log("btnClick====")
    }
  }
}
</script>
<style>
  .title{
    color:green
  }
</style>