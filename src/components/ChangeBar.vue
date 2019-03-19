<template>
  <input
    v-model="checked"
    class="changeBar_check"
    type="checkbox"
    @change="changeAllItemsStatus(checked)"
  >
</template>

<script>
import store from '../store.js'
export default {
  data: function () {
    return {
      checked: false
    }
  },
  methods: {
    changeAllItemsStatus (checked) {
      store.changeAllItemsStatusAction(checked)
    }
  }
}
</script>
