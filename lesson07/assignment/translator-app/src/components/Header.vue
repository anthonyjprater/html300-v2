<template>
<header class="main">
  <nav class="navbar navbar-expand-lg ">
    <div class="container-fluid">
      <a class="navbar-brand shadow-large d-flex flex-wrap" href="#">
        <h1 class="logo mr-1" data-toggle="tooltip" data-placement="top" title="A long time ago in a galaxy far, far away....">Galactic Translator</h1>
      </a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample05" aria-controls="navbarsExample05" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon">Menu</span>
      </button>

      <div class="collapse navbar-collapse" id="navbarsExample05">
        <ul class="navbar-nav mx-auto">
          <li class="nav-item mr-3 active">
            <a class="nav-link" href="index.html">Home <span class="sr-only">(current)</span></a>
          </li>
          <li class="nav-item mr-3">
            <a class="nav-link" href="gallery.html">Gallery</a>
          </li>
          <li class="nav-item mr-3">
            <a class="nav-link" href="philology.html">Philology</a>
          </li>
          <li class="nav-item mr-3 dropdown">
            <a class="nav-link dropdown-toggle" href="#" id="dropdown05" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Translator</a>
            <div class="dropdown-menu bg-dark" aria-labelledby="dropdown05">
              <a class="dropdown-item" href="translator.html">Yoda</a>
              <a class="dropdown-item" href="translator.html">Huttese</a>
              <a class="dropdown-item" href="translator.html">Aurebesh</a>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  <hr class="hr_rule col-12">
</header>
</template>

<script>
export default {
  name: 'Header',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.hr_rule {
    border-top: 2px solid #fff;
}

.navbar-brand {
    font-family: SF Distant Galaxy Outline, "monospace";
    color: red;
    text-shadow: 2px 2px 2px $space-red, 0 0 2px $space-blue, 0 0 2px $space-blue;
    font-family: $galaxy;
    transition: text-shadow 1s ease, color 2s ease, font-weight 2s ease, opacity 2s ease;
    &:hover {
        color: #fff;
        text-shadow: 1px 1px 2px gold, 0 0 1rem yellow, 0 0 0.2rem yellow;
        font-weight: 600;
        border-radius: 8px;
    }
    & .logo {
        font-size: 1.5rem;
    }
}

.nav-item {
    font-family: $moon;
    font-size: 1.5rem;
    letter-spacing: 0.1rem;
    border-radius: 8px;
    box-shadow: 1px 1px 1px 1px $eclipse;
    & .nav-link {
        color: $eclipse;
        &:hover {
            color: #bbb;
            text-shadow: 2px 2px 2px $space-blue;
        }
    }
    &:hover {
        box-shadow: 3px 3px 3px #bbb;
    }
}

div > .dropdown-item {
    color: #000;
    font-size: 1.5rem;
    font-weight: 900;
    font-family: $moon;
    text-shadow: 1px 1px 1px #bbb;
    &:hover {
        color: #bbb;
        text-shadow: 2px 2px 2px $space-blue;
        background-color: #000;
        line-height: 1.5rem;
    }
}

.navbar-toggler {
    border: 1px solid $space-blue;
    border-radius: 10px;
    box-shadow: -1px -1px 3px 1px $space-blue;
    & .navbar-toggler-icon {
        color: $saber-blue;
        width: auto;
    }
}
</style>
