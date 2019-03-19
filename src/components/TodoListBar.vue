<template>
  <div>
    <div v-if="showTodos.length">
      <TodoListItem
        v-for="todo in showTodos"
        :key="todo.id"
        :todo="todo"
      />
    </div>
    <div v-else>
      请添加待做事项*_*
    </div>
  </div>
</template>
<script>
import TodoListItem from './TodoListItem.vue'
import store from '../store.js'

export default {
  components: {
    TodoListItem
  },
  data: function () {
    return {
      todos: store.state.todos
    }
  },
  computed: {
    showTodos: function () {
      let data
      switch (this.$route.params.type) {
        case 'all':
          data = this.todos
          break
        case 'active':
          data = this.todos.filter(item => !item.done)
          break
        case 'completed':
          data = this.todos.filter(item => item.done)
          break
        default:
          break
      }
      return data
    }
  }
}
</script>
