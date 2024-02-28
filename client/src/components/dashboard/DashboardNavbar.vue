<template>
  <aside class="mainNavbar">
    <div class="navHeader">
      <img src="/logo-mybrand.svg" alt="logo">
    </div>
    <ul>
      <router-link
        v-for="navItem, index in navList"
        :key="index"
        :to="navItem.route"
        class="navItem"
        >
        <span
          class="itemIcon"
          :class="navItem.icon"
          :style="{ color: navItem.iconColor }"
          size="lg" 
        ></span>
        {{ navItem.name }}
      </router-link>
    </ul>
  </aside>
</template>

<script setup>

const navList = [
  {
    name: 'Dashboard',
    icon: 'pi pi-book',
    route: '/dashboard',
    iconColor: '#7889E8'
  },
  {
    name: 'Colaboradores',
    icon: 'pi pi-users',
    route: '/dashboard/partners',
    iconColor: '#FB6340'
  },
]

</script>

<style scoped lang="sass">
.navHeader 
  display: flex
  align-items: center
  color: #344767
  font-size: 1rem
  font-weight: 600
  padding: 1.5rem 2rem
.navHeader > img 
  width: 170px

a.router-link-exact-active 
  color: #344767
  background-color: #F6F9FC
  font-weight: 600

ul 
  padding: 0

.mainNavbar 
  max-width: 17rem
  min-width: 15.5rem
  background-color: #fff
  border-radius: 1rem
  z-index: 100
  margin: 1rem
  transition: 0.5s
.navItem 
  display: flex
  border-radius: .5rem
  padding: 0.5rem 1rem
  margin: 0.5rem
  align-items: center
  font-weight: 500
  color: #67748e
  font-size: .875rem
  text-decoration: none

.itemIcon 
  margin: 10px

  
@media (max-width: 1100px) 
  .navHeader 
    display: none
  .mainNavbar 
    max-width: 100%
  .navItem 
    margin: .5rem 0
    padding: .3rem
  ul 
    display: flex
    max-width: 100%
    justify-content: center
    margin: 0
    padding: 0 .5rem

@media (max-width: 450px) 
  .navItem 
    font-size: .7rem
    padding: 0
</style>