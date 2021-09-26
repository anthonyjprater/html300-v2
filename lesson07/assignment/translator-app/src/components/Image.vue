<template>
<main class="container gallery text-center py-5 mb-5">
  <h1 class="display-4 title__image font-weight-bold pb-2 mt-4 mb-2 border-bottom">
    Views of the Galactic Empire
  </h1>
  <div id="galleryWrapper" class="wrapper_gallery row align-content-around rounded pt-3">
    <template v-for="item in items" v-bind:key="item">
      <div class="figure__wrapper">
        <figure class="figure">
          <a :href="item.links.self" class="d-block text-center">
            <img class="img-fluid img-thumbnail bg-dark gallery__image" :src="item.urls.regular" :alt="item.alt_description" />
          </a>
        </figure>
        <br />
        <p class="photo__credit m-auto text-light">
          Photo by
          <a :href="item.user.links.self">{{item.user.name}}</a> on <a :href="siteCredit">UnSplash</a>
        </p>
      </div>
    </template>
  </div>
</main>
</template>

<script>
export default {
  name: 'Image',
  props: {
    msg: String
  },
  data() {
    return {
      message: "Welcome to Vue!",
      totalVuePackages: "",
      items: [],
      siteCredit: "https://unsplash.com/?utm_source=your_app_name&utm_medium=referral",
    }
  },
  methods: {
    doSomething() {
      alert("Hello!");
    }
  },
  created() {
    // GET request using fetch with error handling
    fetch("https://api.unsplash.com/search/photos?query=starwars&per_page=12&client_id=PaHrfu4_q3NMgYkSbeKWbwn7QLzd8AQuzUtbVnBkafg")
      .then(async (response) => {
        const images = await response.json();

        // check for error response
        if (!response.ok) {
          // get error message from body or default to response statusText
          const error = (images && images.message) || response.statusText;
          return Promise.reject(error);
        }
        this.items = images.results;
        this.total = images.total;
        // this.imageLink = images.results.urls.regular;
        // this.altText - images.results.alt_description;
        // this.creditLink = images.results.user.links.html;
        // this.creditName = images.results.username;
        console.log(images.results);
      })
      .catch((error) => {
        this.errorMessage = error;
        console.error("There was an error!", error);
      });
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.title__image {
    font-family: SF Distant Galaxy Outline;
    text-shadow: 4px 4px 5px $saber-blue, 2px 2px 2px $space-blue, 2px 2px 8px $space-blue;
    color: $becca;
    width: 100%;
    text-align: center;
}
.image__page {
    background-color: #000;
}
.gallery {
    margin-bottom: 7rem;
}
.gallery__image {}

// Philology Page Styling
.body__translator {
    background-color: #000;
}
.accordion .card {
    background-color: #000;
    border-radius: 30px;
    box-shadow: 2px 2px 100px 2px $saber-blue;
}
h2 > .btn {
    border: 2px solid $saber-blue;
    box-shadow: 3px 0 100px 1px $saber-blue;
    font-family: $moon;
}

.wrapper_gallery {
    display: flex;
    flex-flow: row wrap;
    gap: 1rem;
    justify-content: space-around;
    font-family: 'Poppins';
}
img {
    float: left;
    width: 200px;
    height: 200px;
    object-fit: cover;
}
.figure__wrapper {
    display: flex;
    flex-flow: column nowrap;
    gap: 0.5rem;
    align-items: center;
}
.figure {
    padding: 0.25rem;
    border: 2px solid $becca;
    border-radius: 8px;
    box-shadow: 1px 2px 2px 2px #fff;
}
.photo__credit {
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    gap: 0.5rem;
    & a {
        color: #fff;
        text-decoration: none;
        &:hover {
            text-shadow: 2px 4px 4px $space-red;
            font-size: 1.1rem;
        }
    }
}
p {
    color: #fff;
}
.card-body {
    color: #8f8f8f;
    font-size: 1.25rem;
    line-height: 1.5rem;
    font-family: "monospace";
}
</style>
