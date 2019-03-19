<template>
  <div id="app">
    <Panel />
  </div>
</template>

<script>
import Panel from './components/Panel.vue'
export default {
  name: 'App',
  components: {
    Panel
  }
}
</script>
<style>
    #app {
        width: 500px;
        margin: 10px auto;
        border-bottom: 1px solid #ddd;
        box-shadow: 0 0 10px #eee;
    }
</style>
