let itemId = 0
// done=false：未做
// done=true：已做
let store = {
  debug: true,
  state: {
    todos: [
      {
        id: itemId++,
        text: 'Learn Vue',
        done: false
      },
      {
        id: itemId++,
        text: 'Learn about single-file components',
        done: true
      },
      {
        id: itemId++,
        text: 'Fall in love',
        done: false
      }
    ]
  },

  /**
   * 获取所有事件
   */
  // getAllItemsAction () {
  //   return this.state.todos
  // },

  /**
   * 添加todo事件
   * @param {String} newText   新的todo事件内容
   */
  addItemAction (newText) {
    if (newText) {
      let id = itemId++
      this.state.todos.push({ id, text: newText, done: false })
    }
  },

  /**
   * 修改todo事件
   * @param {Number} id   todo事件id
   * @param {String} newText   修改后的todo事件内容
   */
  changeItemContentAction (id, newText) {
    let todos = this.state.todos
    for (let i = 0; i < todos.length; i++) {
      if (todos[i].id === id) {
        todos[i].text = newText
      }
    }
  },

  /**
   * 修改一个todo事件的完成状态
   * @param {Number} id   todo事件id
   */
  changeItemStatusAction (id) {
    let todos = this.state.todos
    for (let i = 0; i < todos.length; i++) {
      if (todos[i].id === id) {
        todos[i].done = !todos[i].done
      }
    }
  },

  /**
   * 修改所有todo事件的完成状态
   * @param {Number} id   todo事件id
   * @param {Boolean} done   修改状态
   */
  changeAllItemsStatusAction (done) {
    let todos = this.state.todos
    for (let i = 0; i < todos.length; i++) {
      todos[i].done = done
    }
  },

  /**
   * 删除当前的todo事件
   * @param {Number} id   todo事件id
   */
  deleteItemAction (id) {
    let todos = this.state.todos
    let index
    for (let i = 0; i < todos.length; i++) {
      if (todos[i].id === id) {
        index = i
      }
    }
    todos.splice(index, 1)
  },

  /**
   * 清除完成的事件
   */
  clearCompletedEventsAction () {
    let todos = this.state.todos
    for (let i = 0; i < todos.length; i++) {
      if (todos[i].done) {
        todos.splice(i, 1)
        i--
      }
    }
  },

  /**
   * 获取当前todo事件
   */
  getCurrentTodoCountAction () {
    return this.state.todos.filter(item => !item.done).length
  }

  /**
   * 获取所有待做事件
   */
  // getAllTodoItemsAction () {
  //   return this.state.todos.filter(item => !item.done)
  // },

  /**
   * 获取所有已完成事件
   */
  // getAllCompletedItemsAction () {
  //   return this.state.todos.filter(item => item.done)
  // }
}
export default store
