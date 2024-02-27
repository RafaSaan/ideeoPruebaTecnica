<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router';

const router = useRouter()
const isMenuOpen = ref(false)
const navList = [
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
      <a class="navbarLogo" @click="router.push('/')">
        <img class="imgLogo" src="/logo-mybrand.svg" alt="logo-mybrand" width="200">
      </a>
      <div class="navigationContainer">
        <ul class="navigation" :class="isMenuOpen ? 'isOpen' : ''">
          <li class="navItem" v-for="navItem, index in navList" :key="index">
            <a class="navLink">{{ navItem.name }}</a>
          </li>
        </ul>
      </div>
      <div class="menuIcon" @click="isMenuOpen = !isMenuOpen">
        <img src="/hamburgerMenu.svg" alt="menu icon">
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
  padding: 0.3125rem 0
  cursor: pointer
.menuIcon
  color: #000
  width: 2rem
  padding-top: 0.3125rem
  cursor: pointer
  display: none
.navigation 
  display: flex
  list-style: none
  align-content: center
  letter-spacing: .5px
  flex-direction: row
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
@media (max-width: 850px)
  .menuIcon
    display: block
  .navbar
    justify-content: space-between
  .navigation
    display: none
    flex-direction: column
    position: absolute
    top: 4rem
    right: 2rem
    background-color: #fff
  .navbarLogo
    margin-left: 0
.isOpen
  display: flex
</style>
