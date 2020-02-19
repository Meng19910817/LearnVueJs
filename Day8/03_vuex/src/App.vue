<template>
  <div id="app">
    <h2>===App===</h2>
    <h2>{{this.$store.state.counter}}</h2>
    <button @click="add">+</button>
    <button @click="sub">-</button>
    <hello-vuex/>
    <h2>amount:{{this.$store.getters.filterbooks}}</h2>
    <h2>Price is greater than 50:{{this.$store.getters.greaterThan(50)}}</h2>
    <button @click="addNum(5)">+5</button>
    <button @click="addNum(10)">+10</button>
    <button @click="addBook()">Add a book</button>
    <h2>==================================</h2>
    <h2>{{this.$store.state.info.name}}</h2>
    <button @click="updateInfo('Echo')">Update Name</button>
  </div>
</template>

<script>

import HelloVuex from "./components/HelloVuex"
export default {
  name: 'App',
  components:{
    HelloVuex
  },
  methods:{
    add(){
      this.$store.commit("increment")
    },
    sub(){
      this.$store.commit("decrement")
    },
    addNum(num){
      this.$store.commit("incrementNum", num)
    },
    addBook(){
      const book = {
        id:4,
        name:"JavaScript",
        price:243
      }
      this.$store.commit("incrementBooks", book)
    },
    updateInfo(string){
      //this.$store.dispatch("aUpdateInfo", string)

      this.$store.dispatch("aUpdateInfo", string).then(res=>{
        console.log(res)
        console.log("successful!")
      })
    }
  }
}
</script>

<style>

</style>
