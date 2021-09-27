<template>
<div class="translator__app container-fluid col-12">
  <div class="translator__app--wrapper row row-cols-1 row-cols-sm-2 justify-content-between align-items-center">
    <!-- 	avatar image -->
    <aside class="col-12 col-sm-4 sidebar">
      <figure class="img">
        <img :src="src" class="avatar img-fluid" id="c3po">
      </figure>
    </aside>
    <!-- translator interface -->
    <section class="interface__wrapper container">
      <div class="row align-items-center">
        <main class="main-content col-12 rounded" id="main-content">
          <article class="translator col-12 d-flex flex-column justify-content-center align-items-center">
            <h1 class="translator__heading">{{ title }}</h1>
            <div id="prompt" class="translator__prompt bubble">{{ prompt }}</div>
            <form action="" class="translator__form text-center my-3">
              <div id="userInput" class="bubble">
                <textarea v-model="input" name="ytext" id="ytext" cols="35" rows="10" class="form" placeholder="Please type your text here so C-3P0 can translate it ... for you..."></textarea>
              </div>
              <span class="userText">{{ input }}</span>
              <span id="outPut" class="bubble"></span>
              <button id="translateButton" type="submit" name="translate" class="hidden btn btn-outline-light my-2 form__button">{{ translationbutton }}</button>
            </form>
            <button id="newTranslation" class="btn btn-outline-secondary my-2 form__button">{{ newtranslationbutton }}</button>
          </article>
          <div class="holo"></div>
        </main>
      </div>
    </section>
  </div>
</div>
</template>

<script>
export default {
  name: 'Translator',
  props: {
    msg: String
  },
  data() {
    return {
      input: "",
      message: "Welcome to Vue!",
      src: '../assets/c3po.jpg',
      alt: "a repaired golden droid",
      title: "Translator",
      prompt: "What text would you like me to translate for you?",
      placeholder: "Please type your text here so C-3P0 can translate it ... for you...",
      translationbutton: "Translate Now",
      newtranslationbutton: "New Translation",

    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.translator__app {
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;
    text-align: center;
    gap: 1rem;
}

.form__button {
    background-color: grey;
    border-radius: 6px;
    padding: 0.5rem 1rem;
    margin: 1rem;
    font-family: $moon;
    letter-spacing: 0.25rem;
    &:hover {
        background-color: blue;
    }
}
.main {
    background-color: #000;
}
h2 {
    color: blue;
}
//Styling for Hologram Image
.avatar {
    max-width: 100%;
    height: auto;
    filter: invert(1) opacity(0.2);
    border-radius: 50%;
    &:hover {
        filter: invert(0) opacity(0.5);
    }
}
</style>
