<template>
  <section class="whoWeAreContainer">
    <div class="whoWeAreInfo">
      <h2>Qué hacemos</h2>
      <p>Te ayudamos a crear la personalidad de tu empresa. Con nuestra asesoría 360 podrás
        tener identidad visual, tono de comunicación y lenguaje sin importar el tipo de negocio
        que tengas, te asesoramos en:
      </p>
    </div>
    <div class="iconsSection">
      <img v-for="icon, index in iconsList" :key="index" :src="icon.src" :alt="icon.alt">
    </div>
  </section>
</template>

<script setup>
const iconsList = [
  { alt: 'naming', src:'/naming.svg'},
  { alt: 'naming', src:'/logoIcon.svg'},
  { alt: 'naming', src:'/look&feel.svg'},
]
</script>

<style scoped lang="sass">
.whoWeAreContainer
  width: 100%
  background-color: #fee74e
.whoWeAreInfo 
  padding-top: 3rem
  color: #212529
  display: flex
  flex-direction: column
  align-items: center
.whoWeAreInfo > h2
  text-transform: uppercase
  font-size: 2.2rem
  letter-spacing: 0.2rem
  font-weight: 800
.whoWeAreInfo > p
  width: 48%
  font-size: 1.2rem
  text-align: center
  font-weight: 300
.iconsSection
  display: flex
  justify-content: center
  align-content: center
  margin-top: 1rem
  padding-bottom: 3rem
@media (max-width: 900px) 
  .iconsSection > img
    height: 10rem
  .whoWeAreInfo > p
    width: 90%
@media (max-width: 600px) 
  .iconsSection
    flex-direction: column

</style>