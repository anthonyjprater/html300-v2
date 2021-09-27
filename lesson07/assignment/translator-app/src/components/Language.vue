<template>
<div id="accordion" class="accordion-container">
  <div v-for="(post, index) in posts" :key="index" :class="[
        'accordion',
        { 'is-open': isOpen.includes(index) }
      ]">
    <div class="accordion-header" @click="toggleAccordion(index)">
      <button v-if="!isOpen.includes(index)" class="accordion__toggle--open btn">{{post.language}}</button>
      <button v-else class="accordion__toggle--closed btn">{{post.language}}</button>
    </div>
    <div v-if="isOpen.includes(index)" class="accordion__body--open" :class="post.class">
      <div class="accordion__body--closed">
        <div class="accordion-content">
          {{ post.text }}
          <strong>{{ post.sub }}</strong>
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
      isOpen: [],
      posts: [{
          language: "Yoda Speak",
          text: "What language does Yoda speak? The answer to this is surprisingly clear: It's English! This is not to say that he doesn't speak any other language, but we actually don't have any evidence he does. What's more, if Yoda's native language is not English, we can't infer any details of it from how he speaks English. To appreciate Yoda, maybe it’s best to abandon one’s grammatical senses altogether—or, you know, “unlearn what you have learned.” Like the little guy says, “Do. Or do not. There is no try.”",
          class: 'blue',
          dataTarget: "#collapseOne",
          ariaControls: "collapseOne",
          id: "collapseOne",
          ariaLabelledBy: "headingOne",
          ariaExpanded: 'true'
        },
        {
          language: "Huttese",
          text: "Huttese was the language spoken by the Hutts, a slug-like species who called Nal Hutta their homeworld, and was the second most prevalent language in the galaxy after Galactic Basic. It served as the lingua franca for both Hutt Space and most of the space surrounding the Hutts' territory. Because of the Hutts' commercial and criminal influence throughout the galaxy, Huttese was widespread. Even on worlds such as Lothal, where Hutts were not in power, their tongue was still a widespread trade language. Despite its prevalence, Huttese was generally unknown to stormtroopers, the soldiers of the Galactic Empire, as most of them could not speak anything other than Galactic Basic Standard.",
          class: 'green',
          dataTarget: "#collapseTwo",
          ariaControls: "collapseTwo",
          id: "collapseTwo",
          ariaLabelledBy: "headingOneTwo",
          ariaExpanded: 'false'
        },
        {
          language: "Sith",
          text: "Sith was the native language of the people of Ziost and Korriban. It was adopted as the mystical language of the Sith Order after the Dark Jedi Exiles enslaved the Sith species. Despite the preeminence of the Galactic Basic Standard, the Sith language remained in use up until the post-Imperial period. ur-Kittât, commonly known as Sith or the Old Tongue, was the runic language of the Sith. It was spoken by members of the Sith Order and the Sith Eternal cult as a secret language and written in a runic form.",
          class: 'red',
          dataTarget: "#collapseThree",
          ariaControls: "collapseThree",
          id: "collapseThree",
          ariaLabelledBy: "headingThree",
          ariaExpanded: 'false'
        }
      ]
    }
  },
  methods: {
    toggleAccordion(index) {
      if (this.isOpen.includes(index)) {
        this.isOpen = this.isOpen.filter(i => i !== index);
        return;
      }

      this.isOpen.push(index);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.accordion-container {
    display: flex;
    flex-flow: column nowrap;
    gap: 0.5rem;
    margin: 1rem;
    padding: 0.5rem;
    min-height: 20rem;
}

.accordion__toggle--closed,
.accordion__toggle--open {
    border: 2px solid blue;
    box-shadow: 3px 0 100px 1px blue;
    font-family: $moon;
    font-size: 1.25rem;
    padding: 0.5rem;
    min-width: 10rem;
    border-radius: 10px;
    background-color: $saber-blue;
    &:hover {
        border: 4px solid blue;
        box-shadow: 1px 1px 8px 1px $space-blue;
    }
    &:focus {
        border: 4px solid blue;
        box-shadow: 1px 1px 8px 1px $space-blue;
    }
}

.accordion__body--closed {
    max-height: 0;
    margin: 2rem 0;
}
.blue {
    text-shadow: 1px 1px 25px $space-blue;
}
.green {
    text-shadow: 1px 1px 25px green;
}
.red {
    text-shadow: 1px 1px 25px $space-red;
}
.accordion__body--open {
    color: #8f8f8f;
    font-size: 1.1rem;
    line-height: 1.5rem;
    font-family: sans-serif;
    padding-bottom: 2rem;
    margin: 1rem 0 2rem;
    min-height: 50rem;
    border-radius: 8px;
    display: flex;
    flex-flow: column nowrap;
    overflow: auto;
}
@media only screen and (max-width: 600px) {
    .accordion__body--open {
        margin: 1rem 0 2rem;
    }
}
.accordion-header {}
.accordion {
    margin-top: 0.25rem;
    padding: 0 2rem;

}
.accordion-content {
    font-family: $poppin;
    padding: 0.5rem;
    overflow: hidden;

}
.card {
    margin: 0.5rem;
    padding: 0.5rem 1rem 1rem;
}
.card-body {
    padding: 1.25rem;
}
.collapse {
    padding: 0;
    max-height: 10em;
    overflow: hidden;
    transition: 0.3s ease all;
}
.is-closed .collapse {
    max-height: 0;
}
</style>
