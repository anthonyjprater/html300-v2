<template>
<div class="language container mb-5 pb-5">
  <div class="accordion" id="accordionExample">
    <div class="card" :class="accordionClasses">
      <div class="card-header" id="headingOne">
        <h2 class="mb-0 card-title">
          <button class="btn btn-dark btn-outline btn-lg text-left article__btn" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" @click="toggleAccordion">
            Yoda Speak
          </button>
        </h2>
      </div>

      <div id="collapseOne" class="collapse" aria-labelledby="headingOne" data-parent="#accordionExample">
        <div class="card-body card-text">
          What language does Yoda speak? The answer to this is surprisingly clear: It's English! This is not to say that he doesn't speak any other language, but we actually don't have any evidence he does. What's more, if Yoda's native language is
          not English, we can't infer any details of it from how he speaks English. To appreciate Yoda, maybe it’s best to abandon one’s grammatical senses altogether—or, you know, “unlearn what you have learned.” Like the little guy says, “Do. Or
          do not. There is no try.”
        </div>
      </div>
    </div>
    <div class="card" :class="accordionClasses">
      <div class="card-header" id="headingTwo">
        <h2 class="mb-0">
          <button class="btn btn-dark btn-outline btn-lg text-left collapsed" v-on:click=" toggleAccordion">
            Huttese
          </button>
        </h2>
      </div>
      <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-parent="#accordionExample">
        <div class="card-body">
          Huttese was the language spoken by the Hutts, a slug-like species who called Nal Hutta their homeworld, and was the second most prevalent language in the galaxy after Galactic Basic. It served as the lingua franca for both Hutt Space and
          most of the space surrounding the Hutts' territory. Because of the Hutts' commercial and criminal influence throughout the galaxy, Huttese was widespread. Even on worlds such as Lothal, where Hutts were not in power, their tongue was
          still a widespread trade language. Despite its prevalence, Huttese was generally unknown to stormtroopers, the soldiers of the Galactic Empire, as most of them could not speak anything other than Galactic Basic Standard.
        </div>
      </div>
    </div>
    <div class="card" :class="accordionClasses">
      <div class="card-header" id="headingThree">
        <h2 class="mb-0">
          <button class="btn btn-dark btn-outline btn-lg text-left collapsed article__btn" type="button" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree" @click="toggleAccordion">
            Aurebesh
          </button>
        </h2>
      </div>
      <div id="collapseThree" class="collapse" aria-labelledby="headingThree" data-parent="#accordionExample">
        <div class="card-body">
          Aurebesh was a writing system used to transcribe Galactic Basic Standard, one of the most used languages in the galaxy. In the Outer Rim Territories, Aurebesh was sometimes used alongside Outer Rim Basic, another alphabet. Aurebesh was
          commonly used by major governments from the Galactic Empire to the Confederacy of Independent Systems. Its name was a portmanteau of its first two letters, Aurek and Besh.
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'Language',
  props: {
    msg: String
  },
  data() {
    return {
      isOpen: true,
    }
  },
  methods: {
    toggleAccordion: function() {
      this.isOpen = !this.isOpen;
    }
  },
  computed: {
    accordionClasses: function() {
      return {
        'is-closed': !this.isOpen,
      }
    }
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.btn {
    border-radius: 8px;

    &:hover {
        border: 4px solid blue;
        box-shadow: 1px 1px 8px 1px $space-blue;
    }
    &:focus {
        border: 4px solid blue;
        box-shadow: 1px 1px 8px 1px $space-blue;
    }
}

.card {
    margin: 0.5rem;
    padding: 0.5rem 1rem 1rem;
}

.isclosed {
    height: 0.5rem;
}
</style>
