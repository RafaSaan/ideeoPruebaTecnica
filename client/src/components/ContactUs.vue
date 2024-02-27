<template>
  <div class="contactUsSection">
    <div class="contactUsContainer">
      <div class="contactUsImage">
        <p>Contáctanos</p>
      </div>
      <div class="formContainer">
        <form class="form" @submit.prevent="sendContactForm">
          <div class="inputContainer">
            <label for="name">Nombre</label>
            <input type="text" id="name" v-model="contactForm.name">
            <span class="error" v-if="error('name').hasError">{{ error('name').message }}</span>
          </div>
          <div class="inputContainer">
            <label for="email">Correo Electrónico</label>
            <input type="email" id="email" v-model="contactForm.email">
            <span class="error" v-if="error('email').hasError">{{ error('email').message }}</span>
          </div>
          <div class="inputContainer">
            <label for="message">Mensaje</label>
            <textarea id="message" rows="10" cols="50" v-model="contactForm.message"></textarea>
            <span v-if="error('message').hasError" class="error">{{ error('message').message }}</span>
          </div>
          <button class="btnSend">enviar</button>
        </form>
      </div>
  
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const errors = ref([])
const contactForm = ref({
  name: '',
  email: '',
  message: ''
})

function sendContactForm() {
  validateForm()
}

function validateForm () {
  errors.value = []
  if (contactForm.value.name === '') errors.value['name'] = 'El nombre es requerido'
  if (contactForm.value.email === '') errors.value['email'] = 'El email es requerido'
  if (contactForm.value.message === '') errors.value['message'] = 'El mensaje es requerido'
}

function error(key) {
  if (key in errors.value) {
    return { message: errors.value[key], hasError: true }
  }
  return { message: '', hasError: false }
}

</script>

<style lang="sass" scoped>
.contactUsSection
  width: 100%
  display: flex
  justify-content: center
.contactUsContainer
  display: flex
  justify-content: center
  margin: 3rem 0
  width: 60%
.contactUsImage
  background-image: url(/mega-iconB-line.svg)
  width: 50%
  background-color: #fee74e
  background-repeat: no-repeat
  background-position: 1rem 1rem
  background-size: 18rem
.contactUsImage > p
  font-size: 2.5rem
  font-weight: 600
  position: relative
  top: 10rem
  left: 4rem
.formContainer
  background-color: #fff
  width: 50%
  padding: .5rem
  border: 1px solid #000
.inputContainer
  display: flex
  flex-direction: column
  padding: .5rem
.inputContainer > label
  padding: 0
  font-weight: 600
  font-size: 1rem
.inputContainer > input
  display: block
  width: 100%
  padding: 0.375rem 0.75rem
  font-size: 1rem
  line-height: 1.5
  color: #495057
  background-clip: padding-box
  border: none
  border-radius: 0.25rem
  transition: border-color .15s ease-in-out,box-shadow .15s ease-in-out
  background-color: #e0e0e0
.inputContainer > input:focus
  outline: none
  background-color: #fff
.inputContainer > input:focus-within
  border: solid 2px #007bff
textarea 
  resize: none
  border: none
  border-radius: 0.25rem
  transition: border-color .15s ease-in-out,box-shadow .15s ease-in-out
  background-color: #e0e0e0
  padding: .5rem

textarea:focus
  outline: none
  background-color: #fff
textarea:focus-within
  border: solid 2px #007BFF
.btnSend
  width: 150px
  padding: 0.5rem 3rem
  border-radius: 0
  border: solid 1.5px #000000
  font-size: 0.8rem
  font-weight: 700
  text-transform: uppercase
  background-color: #ffffff
  transition: all .2s
  margin-top: .5rem
  cursor: pointer
  margin-left: .5rem
.form
  display: flex
  flex-direction: column
  gap: .5rem
.error 
  font-size: 12px
  color: #FF0000

@media (max-width: 1100px)
  .contactUsContainer
    flex-direction: column
    align-items: center
    width: 90%
  .formContainer
    width: 80%
  .contactUsImage
    width: 80%
  .contactUsImage > p
    top: 1rem
    left: 1rem
@media (max-width: 450px)
  .contactUsImage > p
    font-size: 1.9rem

</style>