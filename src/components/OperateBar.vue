<template>
  <div class="operateBar_wrapper">
    <span class="operateBar_count">{{ todoCount }} items left</span>
    <ul class="operateBar_switch">
      <li
        class="operateBar_all operateBar_butt"
        :class="$route.params.type === 'all' ? 'operateBar_butt-active' : ''"
      >
        <router-link to="/all">
          All
        </router-link>
      </li>
      <li
        class="operateBar_active operateBar_butt"
        :class="$route.params.type === 'active' ? 'operateBar_butt-active' : ''"
      >
        <router-link to="/active">
          Active
        </router-link>
      </li>
      <li
        class="operateBar_complete operateBar_butt"
        :class="$route.params.type === 'completed' ? 'operateBar_butt-active' : ''"
      >
        <router-link to="/completed">
          Completed
        </router-link>
      </li>
    </ul>
    <button
      class="operateBar_clear"
      @click="clearTodoList"
    >
      Clear completed
    </button>
  </div>
</template>
<script>
import store from '../store.js'
export default {
  data: function () {
    return {
      todos: store.state.todos
    }
  },
  computed: {
    todoCount  () {
      return this.todos.filter(item => !item.done).length
    }
  },
  created: function () {
    this.todoCount = store.getCurrentTodoCountAction()
  },
  methods: {
    clearTodoList () {
      store.clearCompletedEventsAction()
    }
  }
}

</script>
<style lang='less' scope>
.operateBar_switch {
    list-style: none;
    display: inline-block;
    margin: 0;
    padding: 0px;
}
.operateBar_butt {
    display: inline;
    margin: 3px;
    padding: 3px 7px;
}
.operateBar_butt a {
    text-decoration: none;
    color: #000000;
}
.operateBar_butt-active {
    border: 1px solid rgba(175, 47, 47, 0.2);
    border-radius: 5px;
}
.operateBar_wrapper {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 50px;
    box-sizing: border-box;
    padding: 6px 18px;
    border-top: 1px solid #dddddd;
}
</style>
