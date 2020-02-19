import Vuex from "vuex"
import Vue from "vue"

Vue.use(Vuex)

const store = new Vuex.Store({
  state:{
    counter:100,
    books:[
      {
        id:1,
        name:"Java",
        price:34
      },
      {
        id:2,
        name:"Python",
        price:89
      },
      {
        id:1,
        name:"Go",
        price:123
      },

    ],
    info:{
      name: "Mengyu"
    }
  },
  mutations:{
    increment(state){
      state.counter++
    },
    decrement(state){
      state.counter--
    },
    incrementNum(state, count){
      state.counter += count
    },
    incrementBooks(state, book){
      state.books.push(book)
    },
    updateInfo(state, string){
      state.info.name = string
    }
  },
  getters:{
    filterbooks(state){
      return state.books.length
    },
    greaterThan(state){
      return price => {
        return state.books.filter(b => b.price > price)
      }
    }
  },
  actions:{
    aUpdateInfo(context,string){
      Vue.set()
      // setTimeout(()=>{
      //   context.commit('updateInfo', string)
      // }, 1000)

      return new Promise((resolve, reject)=>{
        resolve()
      })
    }
  }
})

export default store
