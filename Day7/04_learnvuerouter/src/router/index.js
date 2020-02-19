import VueRouter from "vue-router"
import Vue from "vue"


// import Home from "../components/Home"
// import About from "../components/About"
// import User from "../components/User"
const Home = () => import("../components/Home")
const About = () => import("../components/About")
const User = () => import("../components/User")
const HomeNews = () => import("../components/HomeNews")
const HomeMessage = () => import("../components/HomeMessage")
const Profile = () => import("../components/Profile")

Vue.use(VueRouter)


const routes =[
  {//default path
    path:"",
    redirect:"/home"
  },
  {
    path:"/home",
    component: Home,
    meta:{
      title:"Home"
    },
    children:[
      {
        path:"news",
        component:HomeNews
      },
      {
        path:"message",
        component:HomeMessage
      }
    ]
  },
  {
    path:"/about",
    component: About,
    meta:{
      title:"About"
    },
  },
  {
    path:"/user/:userId",
    component: User,
    meta:{
      title:"User"
    },
  },
  {
    path:"/profile",
    component: Profile,
    meta:{
      title:"Profile"
    },
  }
]

const router = new VueRouter({
  routes,
  mode:"history",
  linkActiveClass:"title"
})


export default router 