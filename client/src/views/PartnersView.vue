<template>
  <div class="contactUsAdmin">
    <div class="headerView">
      <h3 class="currentRoute">Dashboard > colaboradores</h3>
    </div>
    <div class="contactUsTable">
      <div class="headerTable">
        <h3>Colaboradores</h3>
        <div class="tableActionsContainer">
          <div class="createBtn" @click="isUpdateOrCreate = true">Agregar</div>

          <div class="paginationSection">
            <span class="paginationBtn"> <span class="pi pi-angle-left"></span></span>
            <div class="paginationItems">
              <div class="paginationItem select">1</div>
              <div class="paginationItem">1</div>
              <div class="paginationItem">1</div>
              <div class="paginationItem">1</div>
            </div>
            <span class="paginationBtn"><span class="pi pi-angle-right"></span></span>
          </div>
        </div>
      </div>

      <div class="rowsSection">
        <div class="rowsFormat">
          <span class="id">id</span>
          <span class="name">Nombre</span>
          <span class="email">Correo electronico</span>
          <span class="options"></span>
        </div>
        <div class="rowsContainer">
          <div class="row" v-if="isLoading">
            <div class="id">
              <LoadingSkeleton :width="50" :height="40"/>
            </div>
            <div class="name">
              <LoadingSkeleton :height="40"/>
            </div>
            <div class="email">
              <LoadingSkeleton :height="40"/>
            </div>
          </div>
          <form class="row" v-if="isUpdateOrCreate" @submit.prevent="">
            <div class="id inputContainer">
            </div>
            <div class="name inputContainer">
              <input type="text" id="partnerName" v-model="partner.name" placeholder="Nombre">
              <span class="error" v-if="error('name').hasError">{{ error('name').message }}</span>
              <span class="error" v-if="statusMessage">{{ statusMessage }}</span>
            </div>
            <div class="email inputContainer">
              <input type="email" id="partnertEmail" v-model="partner.email" placeholder="email">
              <span class="error" v-if="error('email').hasError">{{ error('email').message }}</span>
            </div>
            <div class="email inputContainer">
              <input type="password" id="partnertPassword" autocomplete="new-password" v-model="partner.password" placeholder="contraseña temporal">
              <span class="error" v-if="error('password').hasError">{{ error('password').message }}</span>
            </div>
            <div class="">
              <span class="pi pi-check optionIcon" v-if="!isLoadingPartner" @click="updateOrCreatePartner"></span>
              <span class="pi pi-spin pi-spinner optionIcon" v-else></span>
              <span class="pi pi-times optionIcon" @click="cancelCreatePartner"></span>
            </div>
          </form>
          <div class="noDataMessage" v-if="!isLoading && !partnersList.length">No encontré nada para ti :( </div>
          <div v-else>
            <div class="row" v-for="partner in partnersList" :key="partner.id">
              <span class="id">{{ partner.id }}</span>
              <span class="name">{{ partner.name }}</span>
              <span class="email">{{ partner.email }}</span>
              <span class="optionsRow">
                <span class="pi pi-pencil" @click="setPartnerToEdit(partner)"></span>
                <span class="pi pi-trash" @click="deletePartner(partner.id)"></span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import LoadingSkeleton from '@/components/LoadingSkeleton.vue';
import {
  getPartnersHelper,
  createPartnerHelper,
  validatePartner,
  updatePartnerHelper,
  deletePartnerHelper
} from '@/helpers/partnersHelper'

const errors = ref([])
const partnersList = ref([])
const isLoading = ref(false)
const isLoadingPartner = ref(false)
const isUpdateOrCreate = ref(false)
const isUpdate = ref(false)
const statusMessage = ref('')
const partner = ref({
  name: '',
  email: '',
  password: ''
})

onMounted(() => {
  getPartners()
})
function updateOrCreatePartner() {
  if (isUpdate.value) {
    updatePartner()
    return
  }
  createPartner()
}

async function getPartners() {
  isLoading.value = true
  const data = await getPartnersHelper()
  partnersList.value = data
  isLoading.value = false
}
async function createPartner() {
  const { errorsList, hasErrors } = validatePartner(partner.value, isUpdate.value)
  errors.value = errorsList
  if(hasErrors) return
  isLoadingPartner.value = true
  const {success, error} = await createPartnerHelper(partner.value)
  if (!success) errorPartner(error)
  if (success) successPartner()
}

async function updatePartner() {
  const { errorsList, hasErrors } = validatePartner(partner.value, isUpdate.value)
  errors.value = errorsList
  if(hasErrors) return
  isLoadingPartner.value = true
  const {success, error} = await updatePartnerHelper(partner.value)
  if (!success) errorPartner(error)
  if (success) successPartner()
}
async function deletePartner(id) {
  if (confirm('¿Estas seguro de eliminar este registro?')) {
    const success = await deletePartnerHelper(id)
    if (!success) errorPartner(error)
    if (success) successPartner()
  }
}

function setPartnerToEdit(partnerToEdit){
  errors.value = []
  partner.value = {...partnerToEdit}
  isUpdateOrCreate.value = true
  isUpdate.value = true
}

function errorPartner(error) {
  isLoadingPartner.value = false
  statusMessage.value = error !== '' ? error : 'Ha ocurrido un error con esta acción'
  setTimeout(() => {
    statusMessage.value = ''
  }, 3000);
}
function successPartner() {
  isUpdateOrCreate.value = false
  isLoadingPartner.value = false
  isUpdate.value = false
  getPartners()
  restartPartner()
}

function error(key) {
  if (key in errors.value) {
    return { message: errors.value[key], hasError: true }
  }
  return { message: '', hasError: false }
}

function cancelCreatePartner() {
  restartPartner()
}
function restartPartner() {
  partner.value = {
    name: '',
    email: '',
    password: ''
  }
  isUpdateOrCreate.value = false
  isLoadingPartner.value = false
  isUpdate.value = false
}


</script>

<style lang="sass" scoped>
.contactUsAdmin
  color: #000
h3 
  margin: 0
  font-weight: 600
.headerView
  background-color: #fff
  height: 3rem
  display: flex
  align-items: center
  padding: 0 1rem
.currentRoute
  font-size: 14px
  font-weight: 600
.contactUsTable
  width: 100%
  background-color: #fff
  border-radius: 12px
  margin: 2rem 0
.headerTable
  display: flex
  justify-content: space-between
.headerTable > h3
  padding: 1rem
.paginationSection
  display: flex
  align-items: center
  padding: 0 1rem

.paginationBtn
  width: 25px
  height: 25px
  border-radius: 5px
  border: 1px solid #EAEFF4
  display: flex
  justify-content: center
  align-items: center
  font-size: 18px
  cursor: pointer
.paginationItem
  font-size: 16px
  color: #74879B
  width: 28px
  height: 28px
  border-radius: 5px
  border: 1px solid #EAEFF4
  display: flex
  justify-content: center
  align-items: center
  cursor: pointer
.select
  background-color: #fee74e
  color: #000
.paginationItems
  display: flex
  gap: .5rem
  margin: 0 .5rem
  border: none
.rowsFormat
  width: 100%
  display: flex
  align-items: center
  background-color: #F8FAFF
  text-transform: uppercase
  font-weight: 500
  font-size: 15px
  color: #62666A
  height: 40px
.id
  width: 5%
  margin-left: .5rem
.name
  width: 20%
.email
  width: 20%
.rowsContainer
  display: flex
  flex-direction: column
.row
  display: flex
  align-items: center
  min-height: 40px
  font-size: 14px
.tableActionsContainer
  display: flex
  align-items: center
  gap: 2rem
.createBtn
  width: 150px
  height: 30px
  display: flex
  justify-content: center
  align-items: center
  background-color: #fee74e
  border-radius: 8px
  color: #000
  cursor: pointer
  font-weight: 500
.noDataMessage
  text-align: center
  padding: 2rem
  font-weight: 500
input
  width: 225px
  border: none
  padding: 0.375rem 0.75rem
  font-size: 1rem
  line-height: 1.5
  color: #000
  border-radius: 0.25rem
  transition: border-color .15s ease-in-out,box-shadow .15s ease-in-out
  background-color: #e0e0e0
  margin-top: .5rem
input:focus
  outline: none
input:focus-within
  border: solid 1px #fee74e
.inputContainer
  height: 60px
  display: flex
  flex-direction: column
.error 
  font-size: 12px
  color: #FF0000
.optionIcon
  font-size: 1.3rem
  margin: 0 1rem
  cursor: pointer
.optionsRow
  display: flex
  gap: 1rem
  font-size: 1.1rem
.optionsRow > span
  cursor: pointer
</style>
