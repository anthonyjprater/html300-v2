<template>
<div id="app">
  <TranslatorApp />
</div>
</template>

<script>
import TranslatorApp from "./views/TranslatorApp.vue";


export default {
  name: 'App',
  components: {
    TranslatorApp,
  }
}
</script>

<style lang="scss">
#app {
    background-color: #000;
    color: #fff;
}
</style>
