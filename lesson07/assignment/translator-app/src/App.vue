<template>
<div id="app">

  <Gallery />
</div>
</template>

<script>
import Gallery from './views/Gallery.vue';




export default {
  name: 'App',
  components: {
    Gallery
  }
}
</script>

<style lang="scss">
#app {
    background-color: #000;
    color: #fff;
}
</style>
