<template>
  <footer>
    <div class="iconSection">
      <img src="/mybrand2-02.png" alt="logo">
      <h6>© Derechos reservados 2021.</h6>
    </div>

    <div class="contactInfoContainer">
      <div class="contactInfo">
        <span>Tel.: 55 55 55 55 55m</span>
        <span>Mail: hola@mybrand.co</span>
        <span>Aviso de Privacidad</span>
      </div>
      <div class="iconsContactContainer">
        <img src="/facebook-f-brands.svg" alt="facebook icon">
        <img src="/instagram-brands.svg" alt="instagram icon">
      </div>
    </div>

  </footer>
</template>

<script setup>

</script>

<style lang="sass" scoped>
footer
  background-color: #fff
  width: 100%
  display: flex
  justify-content: space-between
  align-items: center
  padding: 1rem 7rem
.iconSection > img 
  height: 4.5rem
  margin-top: 1rem
.contactInfoContainer
  display: flex
  gap: 2rem
.contactInfo
  display: flex
  flex-direction: column
.iconsContactContainer
  display: flex
  gap: 3rem
.iconsContactContainer > img
  cursor: pointer
</style>