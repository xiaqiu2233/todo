<template>
  <div>
    <div class="panel_head">
      <div class="panel_changeBar">
        <ChangeBar />
      </div>
      <div class="panel_addBar">
        <AddBar />
      </div>
    </div>
    <TodoListBar />
    <OperateBar />
  </div>
</template>

<script>
import AddBar from './AddBar.vue'
import ChangeBar from './ChangeBar.vue'
import TodoListBar from './TodoListBar.vue'
import OperateBar from './OperateBar.vue'

let nextTodoId = 1

export default {
  components: {
    AddBar, ChangeBar, TodoListBar, OperateBar
  },
  data () {
    return {
      newTodoItem: ''

    }
  },
  methods: {
    addTodoItem () {
      const trimmedText = this.newTodoItem.trim()
      if (trimmedText) {
        this.todos.push({
          id: nextTodoId++,
          text: trimmedText
        })
        this.newTodoItem = ''
      }
    },
    removeTodo (idToRemove) {
      this.todos = this.todos.filter(todo => {
        return todo.id !== idToRemove
      })
    },
    clickLabel (id) {

    }
  }
}
</script>

<style lang="less" scoped>
@import '../assets/style/mixin.less';
.panel_head {
  box-sizing: border-box;
  padding: 0 18px;
  .flex_center();
}
.panel_addBar {
  padding: 14px 0;
  margin-left: 30px;
  flex-grow: 2;
}
</style>
