<template>
  <section class="successStoriesSection">
    <p>Casos de éxito</p>
    <div class="cases">
      <div
        class="storieItem"
        v-for="storie, index in succesStoriesList"
        :key="index"
        @click="goToRoute(storie.name)">
        <img :src="storie.src" :alt="storie.name">
        <h5>{{ storie.name }}</h5>
        <h6>{{ storie.type }}</h6>
      </div>
    </div>
  </section>
</template>

<script setup>
import { useRouter } from 'vue-router';

const router = useRouter()
const succesStoriesList = [
  { name: 'Absolook', type: 'Beauty', src:'/ABSOLOOK-07.png' },
  { name: 'Biotechlives', type: 'Medical', src:'/ANUNCIO LUMINOSO BIOTECH.png' },
  { name: 'Skin brand', type: 'Medical', src:'/multiple-lightbulb-designs.png' },
]

function goToRoute(type) {
  router.push({name: 'successStories', params: { type}})
}

</script>

<style lang="sass" scoped>
.successStoriesSection
  background-color: #fff
  width: 100%
  padding: 2rem 0
.successStoriesSection > p
  font-size: 2.6rem
  text-align: center
  color: #212529
  font-weight: 500
  margin: 0
  margin-bottom: 2rem
.cases
  display: flex
  justify-content: center
  gap: 2rem
.storieItem
  cursor: pointer
.storieItem > img
  width: 100%
  height: 35rem
  object-fit: scale-down
.storieItem > h5
  font-size: 1.5rem
  font-weight: 600
  margin: 0.5rem 0
.storieItem > h6
  font-size: 1rem
  font-weight: 500
  margin: 0
@media (max-width: 900px) 
  .cases 
    flex-wrap: wrap
  .storieItem > img
    height: 20rem
</style>