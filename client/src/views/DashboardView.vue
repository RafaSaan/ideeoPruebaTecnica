<template>
  <div class="dashboardView">
    <DashboardNavbar/>
    <div class="mainDisplay">
      <router-view v-slot="{ Component }">
        <transition name="fade" mode="out-in">
          <component :is="Component" />
        </transition>
      </router-view>
    </div>
  </div>
</template>

<script setup>
import DashboardNavbar from '@/components/dashboard/DashboardNavbar.vue'

</script>

<style lang="sass">
body
  background-color: #F5F7FA
  background-image: none
.dashboardView
  width: 100%
  display: flex
  flex-direction: row
.mainDisplay
  width: 100%
  padding: 1rem 2rem
</style>