// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>'
})

//runtime-compiler
//template->abstract syntax tree->virtual dom->render->UI

//runtime-only
//render->UI
//6kb lighter than runtime-compiler
