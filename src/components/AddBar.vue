<template>
  <input
    v-model.trim="newTodo"
    type="text"
    class="addBar_input"
    placeholder="请输入要安排的事情"
    @keydown.enter="addTodoItem"
  >
</template>

<script>
import store from '../store.js'
export default {
  data: function () {
    return {
      newTodo: '',
      checked: false
    }
  },
  methods: {
    addTodoItem () {
      store.addItemAction(this.newTodo)
      this.newTodo = ''
    }
  }
}
</script>

<style scope>
.addBar_input {
  width: 100%;
  outline: none;
  border: none;
  font-size: 20px;
}
</style>
