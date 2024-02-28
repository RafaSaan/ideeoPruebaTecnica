<template>
  <div class="skeleton" :style="{width: width + 'px', height: height + 'px'}"></div>
</template>

<script setup>
const props = defineProps({
  width: {
    type: Number,
    default: 200
  },
  height: {
    type: Number,
    default: 50
  },
})
</script>

<style lang="sass" scoped>
@keyframes pulse-bg 
  0%
    background-color: #ddd
  50%
    background-color: #d0d0d0
  100% 
    background-color: #ddd

.skeleton
  border-radius: 14px
  animation: pulse-bg 1s infinite

</style>