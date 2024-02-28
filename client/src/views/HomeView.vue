<script setup>
import MainNavbar from '@/components/MainNavbar.vue';
import WhoWeAre from '@/components/WhoWeAre.vue'
import AboutUs from '@/components/AboutUs.vue';
import SuccessStories from '@/components/SuccessStories.vue';
import ContactUs from '@/components/ContactUs.vue';
import FooterSection from '@/components/FooterSection.vue';

function goToSection(id) {
  const position = document.getElementById(id).offsetTop;
  window.scrollTo({ top: position, behavior: "smooth" });  
}
</script>

<template>
  <div class="">
    <MainNavbar @goToSection="goToSection"/>
    <div class="mainContainer">
      <main class="mainView" id="home">
        <div class="mainText">
          <h1
            data-aos="fade-in"
            data-aos-duration="500"
            data-aos-easing="ease-in"
            class="aos-init aos-animate">
              Invertir en la identidad digital de tu marca no es caro, no hacerlo sí lo es.
          </h1>
          <p
            data-aos="fade-in"
            data-aos-delay="500"
            data-aos-duration="500"
            data-aos-easing="ease-in"
            class="subtitle"
            >En <span>mybrand</span> planeamos, diseñamos y ejecutamos estrategias digitales bajo una
            metodología comprobada para encontrar la personalidad apropiada de tu marca. Para que pueda ser vista en el mundo virtual.
          </p>
        </div>
        <div class="mainImg">
          <img
            data-aos="fade-in"
            data-aos-delay="1000"
            data-aos-easing="ease-in"
            src="/mega-iconB.svg"
            alt="main logo"
          >
        </div>
      </main>
    </div>
    <WhoWeAre id="wwa"/>
    <div
      id="wmb"
      class="separator"
      data-aos="fade-in"
      data-aos-delay="500"
      data-aos-duration="500"
      data-aos-easing="ease-in">
      <p>Sabemos justo lo que tu MARCA necesita para atraer clientes potenciales</p>
    </div>
    <div class="gameSection">
      <img src="/gameSection.png" alt="">
    </div>
    <div class="secondSeparator">
      <p
        data-aos="fade-in"
        data-aos-delay="500"
        data-aos-duration="500"
        data-aos-easing="ease-in">
        En <span>mybrand </span> nos apasiona analizar, imaginar, crear y definir
        estilos de
        comunicación que posicionarán a tu marca
      </p>
    </div>
    <AboutUs id="aboutUs"/>
    <SuccessStories id="successStories"/>
    <ContactUs id="contactUs"/>
    <FooterSection/>
  </div>
</template>
<style scoped lang="sass">
.mainContainer
  width: 100%
  display: flex
  justify-content: center
.mainView
  padding-top: 7rem
  min-height: 100vh
  display: flex
  justify-content: space-between
  align-items: center
  max-width: 83%
h1
  margin: 0
p 
  font-weight: 300
.mainText 
  color: #212529
.mainText > h1
  font-size: 52px
  font-weight: 500
  width: 85%
  line-height: 1.2
  margin-bottom: 10px
.subtitle
  font-weight: 400
  margin-top: 1.5rem
  margin-bottom: 16px
  font-size: 1.4rem
  width: 80%
.mainImg > img
  max-width: 25rem
.separator > p
  width: 75%
  min-height: 17rem
  margin: 0 auto
  display: flex
  align-items: center
  font-size: 2.6rem
  text-align: center
  color: #212529
  font-weight: 500
.gameSection > img
  vertical-align: middle
  border-style: none
  width: 100%
  cursor: pointer
.secondSeparator
  width: 100%
  display: flex
  justify-content: center
  background-color: #fff
.secondSeparator > p
  font-size: 1.2rem
  margin: 6rem 0
.secondSeparator > p > span
  font-weight: bold

@media (max-width: 1000px) 
  .mainImg
    display: none
  .mainText 
    display: flex
    flex-direction: column
    align-items: center
  .mainText > h1
    font-size: 2.2rem
    width: 100%
  .subtitle
    width: 100%
  .separator > p
    font-size: 1.5rem

</style>