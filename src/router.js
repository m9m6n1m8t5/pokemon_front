import Vue from 'vue'
import HelloWorld from './components/HelloWorld.vue'
import QuizPanel from './components/QuizPanel.vue'
import StartPanel from './components/StartPanel.vue'

import VueRouter from 'vue-router'
Vue.use(VueRouter)


export default new VueRouter({
  mode: 'history',
  routes:  [
    { path:"/", component: StartPanel },
    { path:"/quiz", component: QuizPanel },
    { path:"/hello", component: HelloWorld },
  ]
})