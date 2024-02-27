<template>
  <div class="loginView">
    <div class="loginContainer">
      <div class="loginImage">
        <p>Inicia sesion</p>
      </div>
      <div class="formContainer">
        <h3>Bienvenido</h3>
        <form @submit.prevent="login">
          <div class="inputContainer">
            <label for="email">Correo electronico</label>
            <input id="email" type="email" autocomplete="off" v-model="credentials.email">
            <span class="error" v-if="error('email').hasError">{{ error('email').message }}</span>
          </div>
          <div class="inputContainer">
            <label for="password">Contraseña</label>
            <input id="password" type="text" autocomplete="off" v-model="credentials.password">
            <span class="error" v-if="error('password').hasError">{{ error('password').message }}</span>
          </div>
          <button class="btnSend" v-if="!isLoading">login</button>
          <div v-else class="lds-ring"><div></div><div></div><div></div><div></div></div>
          <div class="">
            <span class="error" v-if="statusMessage">{{ statusMessage }}</span>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router';
import { loginHelper } from '@/helpers/authHelper'


const router = useRouter()
const credentials = ref({
  email: '',
  password: ''
})
const errors = ref([])
const isLoading = ref(false)
const statusMessage = ref('')

async function login() {
  const hasErrors = validateForm()
  if (hasErrors || isLoading.value) return
  isLoading.value = true
  const {success, authenticated} = await loginHelper(credentials.value)
  isLoading.value = false
  if(!success) errorLogin()
  if(!authenticated) unauthenticatedLogin()
  if (success) router.push('/dashboard')
}

function validateForm () {
  let hasErrors = false
  errors.value = []
  if (credentials.value.email === '') errors.value['email'] = 'El email es requerido'
  if (credentials.value.password === '') errors.value['password'] = 'La contraseña es requerida'
    // eslint-disable-next-line no-unused-vars
  for (const property in errors.value) { hasErrors = true }
  return hasErrors
}

function errorLogin () {
  statusMessage.value = 'Lo siento, ha ocurrido un error'
  setTimeout(() => {
    statusMessage.value = ''
  }, 2000);
}
function unauthenticatedLogin () {
  statusMessage.value = 'No se ha encontrado un usuario con ese correo y contraseña'
  setTimeout(() => {
    statusMessage.value = ''
  }, 2000);
}

function error(key) {
  if (key in errors.value) {
    return { message: errors.value[key], hasError: true }
  }
  return { message: '', hasError: false }
}

</script>

<style lang="sass" scoped>
.loginView
  width: 100%
  height: 100vh
  display: flex
  justify-content: center
  align-items: center
.loginContainer
  display: flex
  flex-direction: row
  width: 65%
  height: 50%
.loginImage
  background-image: url(/mega-iconB-line.svg)
  width: 50%
  background-color: #fee74e
  background-repeat: no-repeat
  background-position: 1rem 1rem
  background-size: 18rem
.loginImage > p
  font-size: 2.5rem
  font-weight: 600
  position: relative
  top: 10rem
  left: 4rem
.formContainer
  width: 50%
  background-color: #fff
  padding: 2rem
.formContainer > h3
  font-size: 1.8rem
  margin-bottom: .4rem
.form
  display: flex
  flex-direction: column
  gap: .5rem
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
  margin: 1rem 0
  cursor: pointer
  margin-left: .5rem
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
.error 
  font-size: 12px
  color: #FF0000

.lds-ring 
  display: inline-block
  position: relative
  width: 80px
  height: 80px

.lds-ring div 
  box-sizing: border-box
  display: block
  position: absolute
  width: 45px
  height: 45px
  margin: 8px
  border: 8px solid #000
  border-radius: 50%
  animation: lds-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite
  border-color: #000 transparent transparent transparent

.lds-ring div:nth-child(1) 
  animation-delay: -0.45s

.lds-ring div:nth-child(2) 
  animation-delay: -0.3s
.lds-ring div:nth-child(3) 
  animation-delay: -0.15s
@keyframes lds-ring 
  0% 
    transform: rotate(0deg)
  100% 
    transform: rotate(360deg)

@media (max-width: 1100px)
  .loginContainer
    flex-direction: column
    align-items: center
    width: 90%
  .formContainer
    width: 80%
    padding: 0
  .loginImage
    width: 80%
  .loginImage > p
    top: 1rem
    left: 1rem
  
@media (max-width: 450px)
  .loginImage > p
    font-size: 1.9rem
</style>