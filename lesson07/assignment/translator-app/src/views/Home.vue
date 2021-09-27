<template>
<main class="main container">
  <div class="row landing">
    <div class="stars position-absolute col-12 overflow-hidden"></div>
    <div class="twinkling position-absolute col-12 overflow-hidden"></div>
    <div class="jumbotron bg-transparent text-warning container col-8">
      <h1 class="landing__header justify-content-between text-center col-12 mb-5" data-toggle="tooltip" data-placement="top" title="A long time ago in a galaxy far, far away....">Galactic Translator</h1>
      <p class="hero__runner text-center mb-5 mt-5">A Project for UW HTML 300 Course</p>
      <a href="translator.html" class="landing__link btn btn-warning py-1 px-4">Enter</a>
    </div>
  </div>
  <router-view /> <audio class="landing__audio" autoplay loop>
    <source :src="audio">
    <p>Your browser doesn't support HTML5 audio. Here is a <a href="https://soundcloud.com/faroutofficial/far-out-the-force-theme-star-wars-cover">link to the audio</a> instead.</p>
  </audio>
</main>
</template>

<script>
export default {
  name: 'Home',
  props: {
    msg: String
  },
  data() {
    return {
      audio: require('../assets/sound_Far Out - The Force Theme.mp3')
    }
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "../assets/base.normalize";
@import "../assets/settings.variables";
@import "../assets/settings.responsive";
@import "../assets/components.content";
@import url("https://fonts.googleapis.com/css?family=Poppins:400,500,600,700&display=swap");

.stars,
.twinkling {
    position: absolute;
    display: block;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
}
.stars {
    z-index: 0;
    background: #000 url("../assets/stars.png") repeat top center;
}
.twinkling {
    z-index: 1;
    background: transparent url("../assets/twinkling.png") repeat top center;
    animation: move-twink-back 200s linear infinite;
}

@keyframes move-twink-back {
    from {
        background-position: 0, 0;
    }
    to {
        background-position: -10000px, 5000px;
    }
}

.jumbotron {
    z-index: 1;
    color: gold;
    font-family: SF Distant Galaxy Outline;
    display: grid;
    place-items: center;
    background: #000 url("../assets/stars.png") repeat top center;
    animation: move-twink-back 200s linear infinite;
}

.landing__header {
    z-index: 1;
    text-shadow: 4px 4px 5px #fff, 0 0 2px #fff, 0 0 2px #fff;
    font-size: 5rem;
    text-align: center;
    @include media-query(mobile) {
        font-size: 2rem;
    }
}

.hero__runner {
    z-index: 1;
    text-shadow: 4px 4px 5px #fff, 0 0 2px #fff, 0 0 2px #fff;
    text-align: center;
}

.btn {
    z-index: 1;
    font-family: sans-serif;
    padding: 1rem 2rem;
    background-color: gold;
    border-radius: 10px;
}
a {
    text-decoration: none;
}

landing__audio {
    width: 1px;
    height: 1px;
    background-color: #000;
    left: -10000px;
    top: 0;
}
</style>
