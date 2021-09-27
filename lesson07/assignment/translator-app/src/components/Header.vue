<template>
<header class="main">
  <nav class=" navbar navbar-expand-lg ">
    <div class="nav__wrapper container-fluid">
      <a class="navbar-brand shadow-large d-flex flex-wrap" href="#">
        <h1 class="logo mr-1" data-toggle="tooltip" data-placement="top" title="A long time ago in a galaxy far, far away....">Galactic Translator</h1>
      </a>

      <div class="collapse navbar-collapse" id="navbarsExample05">
        <ul class="nav-menu navbar-nav mx-auto" v-bind:class="{active: isActive}" id="js-menu">
          <li class="nav-item mr-3 active">
            <router-link to="/" class="nav-link">Home</router-link>
          </li>
          <li class="nav-item mr-3">
            <router-link to="/gallery" class="nav-link">Gallery</router-link>
          </li>
          <li class="nav-item mr-3">
            <router-link to="/philology" class="nav-link">Philology</router-link>
          </li>
          <li class="nav-item mr-3 dropdown">
            <router-link to="/translator" class="nav-link dropdown-toggle" href="#" id="dropdown05" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Translator</router-link>
          </li>
        </ul>
        <button class="hamburger" @click="myFilter" v-bind:class="{active: isActive}">Menu
          <div class="hamburger--close">
            <span class="bar"></span>
            <span class="bar"></span>
            <span class="bar"></span>
          </div>
        </button>
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
  },
  data() {
    return {
      isActive: false
    }
  },
  methods: {
    myFilter: function() {
      this.isActive = !this.isActive;
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
a {
    text-decoration: none;
}
li {
    list-style-type: none;
}
.hr_rule {
    border-top: 2px solid #fff;
}
.nav__wrapper {
    display: flex;
    justify-content: space-between;
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
.nav-menu {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 1.5rem;
}
.nav-item {
    font-family: $moon;
    font-size: 1.5rem;
    padding: 0.25rem;
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
.menu {
    display: flex;
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
.hamburger {
    display: none;
    background-color: #000;
    color: $space-blue;
    font-weight: 900;
    font-family: $moon;
    letter-spacing: 0.2rem;
    border-radius: 5px;
    box-shadow: -2px 1px 15px 1px #888;
    transition: box-shadow 250ms ease-in;
}
.hamburger:hover {
    box-shadow: 2px 2px 8px 1px #0000c9;
}

.bar {
    display: block;
    width: 25px;
    height: 3px;
    margin: 5px auto;
    -webkit-transition: all 0.3s ease-in-out;
    transition: all 0.3s ease-in-out;
    background-color: #ccc;
}
@media only screen and (max-width: 768px) {
    .nav-menu {
        position: fixed;
        left: -100%;
        top: 4rem;
        flex-direction: column;
        background-color: #000;
        width: 100%;
        border-radius: 10px;
        text-align: center;
        transition: 0.3s;
        box-shadow: 0 10px 27px rgba(0, 0, 200, 0.5);
    }

    .nav-menu.active {
        left: 0;
        index: 2;
    }

    .menu {
        margin: 1rem 0;
        padding-bottom: 1rem;
    }

    .hamburger {
        display: flex;
        cursor: pointer;
        min-width: 8rem;
        align-items: center;
        justify-content: space-around;
    }

}

.hamburger.active .bar:nth-child(2) {
    opacity: 0;
}

.hamburger.active .bar:nth-child(1) {
    transform: translateY(8px) rotate(45deg);
    background-color: #000;
    box-shadow: 1px 1px 3px 1px red;
}

.hamburger.active .bar:nth-child(3) {
    transform: translateY(-8px) rotate(-45deg);
    background-color: #000;
    box-shadow: 1px 1px 3px 1px blue;
}
.sr-only:not(:focus):not(:active) {
    clip: rect(0 0 0 0);
    clip-path: inset(50%);
    height: 1px;
    overflow: hidden;
    position: absolute;
    white-space: nowrap;
    width: 1px;
}
</style>
