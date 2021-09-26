<template>
<div class="container-fluid col-12">
  <div class="row row-cols-1 row-cols-sm-2 justify-content-between align-items-center">
    <!-- 	avatar image -->
    <aside class="col-12 col-sm-4 sidebar">
      <figure class="img ">
        <img src="/images/c3po.jpg" alt="a repaired golden droid" class="avatar img-fluid" id="c3po">
      </figure>
    </aside>
    <!-- translator interface -->
    <section class="interface__wrapper container">
      <div class="row align-items-center">
        <main class="main-content col-12 rounded" id="main-content">
          <article class="translator col-12 d-flex flex-column justify-content-center align-items-center">
            <h1 class="translator__heading">Translator</h1>
            <div id="prompt" class="translator__prompt bubble">What text would you like me to translate for you?</div>
            <form action="" class="translator__form text-center my-3">
              <div id="userInput" class="bubble">
                <textarea name="ytext" id="ytext" cols="35" rows="10" class="form" placeholder="Please type your text here so C-3P0 can translate it ... for you..."></textarea>
              </div>
              <span id="outPut" class="bubble"></span>
              <button id="translateButton" type="submit" name="translate" class="hidden btn btn-outline-light my-2 form__button">Translate Now</button>
            </form>
            <button id="newTranslation" class="btn btn-outline-secondary my-2 form__button">New Translation</button>
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
