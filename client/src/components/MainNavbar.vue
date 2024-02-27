<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router';

const emit = defineEmits(['goToSection'])

const router = useRouter()
const isMenuOpen = ref(false)
const navList = [
  { name: 'qué Hacemos', id: 'wwa' },
  { name: 'Por qué mybrand', id: 'wmb' },
  { name: 'Nosotros', id: 'aboutUs' },
  { name: 'Casos de éxito', id: 'successStories' },
  { name: 'Contacto', id: 'contactUs' },
]

</script>
<template>
  <header>
    <nav class="navbar">
      <a class="navbarLogo" @click="router.push('/');emit('goToSection','home')">
        <img class="imgLogo" src="/logo-mybrand.svg" alt="logo-mybrand" width="200">
      </a>
      <div class="navigationContainer">
        <ul class="navigation" :class="isMenuOpen ? 'isOpen' : ''">
          <li class="navItem" v-for="navItem, index in navList" :key="index">
            <a  @click="emit('goToSection',navItem.id)" class="navLink">{{ navItem.name }}</a>
          </li>
          <li class="navItem"><router-link to="/login" class="navLink">login</router-link></li>
          <div class="iconsContactContainer">
            <img src="/facebook-f-brands.svg" alt="facebook icon">
            <img src="/instagram-brands.svg" alt="instagram icon">
          </div>
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
  justify-content: space-between
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
  color: rgba(0,0,0,.7)
  padding: 0.5rem
  text-decoration: none
  cursor: pointer
  font-weight: 500
.navLink:hover
  color: rgba(0,0,0)
.iconsContactContainer
  display: flex
  gap: 2rem
  margin-right: 2rem
  align-items: center
.iconsContactContainer > img
  cursor: pointer
  height: 1.6rem
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
  .iconsContactContainer
    margin: 1rem 0
    justify-content: center
.isOpen
  display: flex

</style>
