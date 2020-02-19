const {sum, minus}  = require("./js/mathUtils")
//require("./css/index.css")

console.log(sum(2, 3))
console.log(minus(5, 4))

//less
// require("./css/special.less")
// document.write("<h2>Hello, webpack!</h2>")

//vue
// import Vue from "vue"
// const app = new Vue({
//   el:"#app",
//   template:`
//     <div>
//       <h2>{{message}}</h2>
//       <button @click="btnClick">BTN</button>
//       <h2>{{name}}</h2>
//     </div>
//   `,
//   data:{
//     message:"Hello, vue.js",
//     name:"Mengyu Zou"
//   },
//   methods:{
//     btnClick(){
//       console.log("btnClick====")
//     }
//   }
// })

// import Vue from "vue"
// const cpn = {
//   template:` 
//   <div>
//     <h2>{{message}}</h2>
//     <button @click="btnClick">BTN</button>
//     <h2>{{name}}</h2>
//   </div>`,
//   data(){
//     return {
//       message:"Hello, vue.js",
//       name:"Mengyu Zou"
//     }
//   },
//   methods:{
//     btnClick(){
//       console.log("btnClick====")
//     }
//   }
// }
// new Vue({
//   el:"#app",
//   template:`<cpn/>`,
//   components:{
//     cpn
//   }
// })

import Vue from "vue"
// import cpn from "./vue/app.js"
import cpn from "./vue/App.vue"
new Vue({
  el:"#app",
  template:`<cpn />`,
  components:{
    cpn
  }
})

//plugins
//1.webpack
//2.html-webpack-plugin