<template>
  <div id="tab-bar"> 
      <tab-bar-item path="/home">
        <img slot="item-icon" src="../../assets/img/tabbar/home.svg"/>
        <img slot="item-icon-active" src="../../assets/img/tabbar/home_active.svg"/>
        <div slot="item-text">首页</div>
      </tab-bar-item>
      <tab-bar-item path="/category">
        <img slot="item-icon" src="../../assets/img/tabbar/category.svg"/>
        <img slot="item-icon-active" src="../../assets/img/tabbar/category_active.svg"/>
        <div  slot="item-text">分类</div>
      </tab-bar-item>
      <tab-bar-item path="/cart">
        <img slot="item-icon" src="../../assets/img/tabbar/shopcart.svg"/>
        <img slot="item-icon-active" src="../../assets/img/tabbar/shopcart_active.svg"/>
        <div  slot="item-text">购物车</div>
      </tab-bar-item>
      <tab-bar-item path="/profile">
        <img slot="item-icon" src="../../assets/img/tabbar/profile.svg"/>
        <img slot="item-icon-active" src="../../assets/img/tabbar/profile_active.svg"/>
        <div  slot="item-text">我的</div>
      </tab-bar-item>
    </div>
</template>
<script>
import TabBarItem from "./TabBarItem"
export default {
  name:"TabBar",
  components:{
    TabBarItem
  }
}
</script>
<style scoped>
#tab-bar{
   display: flex; 

   position: fixed;
   left: 0px;
   right: 0px;
   bottom: 0px;

   background-color:#f6f6f6;
   box-shadow:0px -3px 3px rgba(100, 100, 100, 0.1);
   /* height: 49px; */

  }
  
</style>