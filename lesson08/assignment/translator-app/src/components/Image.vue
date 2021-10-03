<template>
<div>
  <img class="gallery__image" :src="src" :alt="alt" :title="title" v-on:click="myImage(); $emit('click');" :class="{active: isActive}" />
</div>
</template>

<script>
export default {
  name: 'Image',
  data() {
    return {
      isActive: false
    }
  },
  props: {

  },
  methods: {
    doSomething() {
      alert("Hello!");
    },
    myImage: function() {
      this.isActive = !this.isActive;
      // some code to filter users
    }
  }
}
</script>

<style scoped>
img {
  float: left;
  width: 200px;
  height: 200px;
  object-fit: cover;
}

.active {
  box-shadow: 3px -3px 15px 2px #a0f, 3px -3px 30px 2px #f0a;
}
</style>
