<script setup>
const navList = [
  { name: 'inicio', href: '' },
  { name: 'qué Hacemos', href: '' },
  { name: 'Por qué mybrand', href: '' },
  { name: 'Nosotros', href: '' },
  { name: 'Casos de éxito', href: '' },
  { name: 'Contacto', href: '' },
]
</script>
<template>
  <header>
    <nav class="navbar">
      <a class="navbarLogo">
          <img class="imgLogo" src="/logo-mybrand.svg" alt="logo-mybrand" width="200">
      </a>
      <div class="navigationContainer">
        <ul class="navigation">
          <li class="navItem" v-for="navItem, index in navList" :key="index">
            <a class="navLink">{{ navItem.name }}</a>
          </li>
        </ul>
      </div>
    </nav>
  </header>
</template>
<style scoped lang="sass">
ul 
  padding: 0
  margin: 0
.imgLogo
  width: 160px
.navbar 
  position: fixed
  width: 100%
  z-index: 1
  background-color: #ffffff
  color: #000
  display: flex
  padding: 0.5rem 1rem
.navbarLogo 
  margin-left: 3rem
  margin-right: 1rem
  padding-top: 0.3125rem
  padding-bottom: 0.3125rem
.navigation 
  display: flex
  list-style: none
  align-content: center
  letter-spacing: .5px
.navItem
  text-transform: uppercase
  padding: 0 1.2rem
  font-size: 13px
  display: flex
  flex-wrap: wrap
  align-content: center
.navigationContainer 
  display: flex
.navLink
  color: rgba(0,0,0,.4)
  padding: 0.5rem
  text-decoration: none
  cursor: pointer
.navLink:hover
  color: rgba(0,0,0,.6)
</style>
