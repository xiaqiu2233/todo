<template>
  <div class="todoList_item">
    <input
      class="item_check"
      type="checkbox"
      :checked="todo.done"
      @click="changeTodoItemStatus(todo.id)"
    >
    <div class="item_content">
      <label
        class="item_label"
        :class="todo.done ? 'item_content-active' : ''"
        @click="changeToInput"
      >
        {{ todo.text }}
      </label>
      <input
        v-model="value"
        class="item_edit"
        :style="{ visibility: isEdit }"
        @keydown.enter="changeTodoItemContent(todo.id, value)"
      >
    </div>
    <i
      class="item_destroy"
      @click="deleteTodoItem(todo.id)"
    />
  </div>
</template>
<script>
import store from '../store.js'

export default {
  props: {
    todo: {
      type: Object,
      required: true
    }
  },
  data: function () {
    return {
      isEdit: 'hidden',
      value: this.todo.text
    }
  },
  methods: {
    deleteTodoItem (id) {
      store.deleteItemAction(id)
    },
    changeTodoItemStatus (id) {
      store.changeItemStatusAction(id)
    },
    changeToInput () {
      this.isEdit = 'visible'
    },
    changeTodoItemContent (id, value) {
      store.changeItemContentAction(id, value)

      this.todo.text = value
      this.isEdit = 'hidden'
    }
  }
}
</script>
<style lang="less" scoped>
@import '../assets/style/mixin.less';
.todoList_item {
  box-sizing: border-box;
  padding: 0 18px;
  border-top: 1px solid #ddd;
  .flex_center();
}

.todoList_item:hover .item_destroy::after {
  visibility: visible;
}

.item_content {
  position: relative;
  height: 100%;
  padding: 14px 0;
  line-height: 1;
  font-size: 18px;
  margin-left: 30px;
  flex-grow: 2;
}

.item_content-active {
  color: #d9d9d9;
  text-decoration: line-through;
}

.item_label {
  display: flex;
  justify-content: center;
  flex-direction: column;
  height: 100%;
}

.item_edit {
  position: absolute;
  box-sizing: border-box;
  left: 0;
  top: 0;
  height: 100%;
  width: 100%;
  font-size: 18px;
  visibility: hidden;
}

.item_destroy {
  display: inline-block;
  position: relative;
  margin: 0 10px 0 25px;
  cursor: pointer;
}

.item_destroy::after{
  content: "×";
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  -moz-transform: translate(-50%, -50%);
  -webkit-transform: translate(-50%, -50%);
  -o-transform: translate(-50%, -50%);
  color: #f39800;
  font-style: normal;
  visibility: hidden;
}
</style>
