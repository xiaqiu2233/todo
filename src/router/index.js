import Vue from 'vue'
import Router from 'vue-router'
import TodoListBar from '../components/TodoListBar.vue'

Vue.use(Router)

const routes = [
  { path: '/', redirect: '/all' },
  { path: '/:type', component: TodoListBar }
]

const router = new Router({
  routes: routes
})

export default router
