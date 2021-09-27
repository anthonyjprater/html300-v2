<template>
<div>
  <Header />
  <Image />
  <Footer />
</div>
</template>

<script>
import Image from "@/components/Image.vue";
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: 'Gallery',
  props: {
    msg: String
  },
  components: {
    Header,
    Image,
    Footer
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
