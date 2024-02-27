<template>
  <div class="successStoriesView">
    <MainNavbar/>
    <div class="successStoriesContainer">
      <div class="headerStories">
        <span> <span class="link" @click="router.push('/')">inicio</span> > casos de exito</span>
        <h2>{{ route.params.type }}</h2>
      </div>
      <div class="storieDescription">
        <h3>imaginamos</h3>
        <p>
          Un logo en el que se mezclara el trabajo del estilista con la frescura que se vive
          al adoptar un nuevo estilo, cuando nos reinventamos a través de un corte de cabello
          y el impacto es absoluto.
        </p>
        <h3>visualizamos</h3>
        <ul>
          <li>La suavidad con la que debe tratarse a cada cliente</li>
          <li>La confianza que pone en quien lo arregla</li>
          <li>La mirada de quien se asombra ante nuestros cambios</li>
          <li>Nuestra presencia en la zona</li>
        </ul>
      </div>
    </div>
    <div class="storieGridContainer">
        <h3>presentamos</h3>
        <p>Suaves líneas que transmiten confianza para quien decide cambiar su imagen,
          con un estilo fresco y audaz que transmita seguridad a quien transforma absolutamente
          su look.
        </p>
        <div class="storieGrid" v-if="!isLoading">
          <img class="singleImage" :src="listImages[0].download_url" :alt="'imagen de' +listImages[0].author">
          <div class="groupImages">
            <img :src="listImages[1].download_url" :alt="'imagen de' +listImages[1].author">
            <img :src="listImages[2].download_url" :alt="'imagen de' +listImages[2].author">
          </div>
          <img class="singleImage" :src="listImages[3].download_url" :alt="'imagen de' +listImages[3].author">
          <div class="groupImages">
            <img :src="listImages[4].download_url" :alt="'imagen de' +listImages[4].author">
            <img :src="listImages[5].download_url" :alt="'imagen de' +listImages[5].author">
          </div>
          grid
        </div>
      </div>
    <div class="separator">
      <blockquote>
        “El significado de un logo deriva de la calidad de aquello que simboliza”
      </blockquote>
      <span>-Paul Rand</span>
    </div>
    <ContactUs/>
    <FooterSection/>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import MainNavbar from '@/components/MainNavbar.vue';
import ContactUs from '@/components/ContactUs.vue';
import FooterSection from '@/components/FooterSection.vue';

const route = useRoute()
const router = useRouter()

const listImages = ref([])
const isLoading = ref(true)

scrollToTop()

onMounted(() => {
  getImages()
})

async function getImages() {
  await fetch('https://picsum.photos/v2/list')
  .then((res) => res.json())
  .then((json) => {
    listImages.value = json
    isLoading.value = false
  })
  shuffle(listImages.value)
}
function shuffle(array) {
  array.sort(() => Math.random() - 0.5);
}

function scrollToTop() {
    window.scrollTo(0,0);
}


</script>

<style lang="sass" scoped>
.successStoriesView
  display: flex
  flex-direction: column
.successStoriesContainer
  padding-top: 6rem
  width: 80%
  align-self: center
.headerStories 
  font-size: 13px
  font-weight: 600
  text-transform: uppercase
  color: #212529
.link
  cursor: pointer
.headerStories > h2
  font-size: 2.5rem
  font-weight: 700
.storieDescription 
  width: 100%
  background-color: #000
  color: #fff
  padding: 4rem 2rem
.storieGridContainer 
  display: flex
  flex-direction: column
  align-items: center
.storieDescription > h3
  font-size: 1.5rem
  font-weight: 600
  letter-spacing: 0.2rem
  text-transform: uppercase
  margin: 2rem 0
.storieGridContainer > h3
  font-size: 2rem
  font-weight: 700
  letter-spacing: 0.2rem
  text-transform: uppercase
  color: #000000
  margin-bottom: .2rem
.storieGridContainer > p
  font-weight: 400
  margin: 2rem
  color: #000000
  text-align: center
  width: 60%
  font-size: 1.2rem
.storieDescription > p
  color: #d6d6d6
  font-size: 1rem
  font-weight: 300
ul
  color: #d6d6d6
  font-size: 1rem
  font-weight: 300
blockquote 
  font-weight: 700
  font-size: 1.9rem
  text-align: center
  width: 80%
.separator 
  display: flex
  justify-content: center
  align-items: center
  flex-direction: column
.separator > p
  font-size: 1.2rem
.singleImage
  aspect-ratio: 16/9
  max-width: 100%
  height: auto
.storieGrid
  width: 100%
  display: flex
  flex-direction: column
.groupImages
  width: 100%
  display: grid
  grid-template-columns: repeat(2, 1fr)
.groupImages > img
  width: 100%
</style>