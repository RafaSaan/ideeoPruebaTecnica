<template>
  <div class="contactUsAdmin">
    <div class="headerView">
      <h3 class="currentRoute">Dashboard > solicitudes de contacto</h3>
    </div>
    <div class="contactUsTable">
      <div class="headerTable">
        <h3>Solicitudes de contacto</h3>
        <div class="paginationSection">
          <span class="paginationBtn"> <span class="pi pi-angle-left"></span></span>
          <div class="paginationItems">
            <div class="paginationItem select">1</div>
            <div class="paginationItem">2</div>
            <div class="paginationItem">3</div>
            <div class="paginationItem">4</div>
          </div>
          <span class="paginationBtn"><span class="pi pi-angle-right"></span></span>
        </div>
      </div>

      <div class="rowsSection">
        <div class="rowsFormat">
          <span class="id">id</span>
          <span class="name">Nombre</span>
          <span class="email">Correo electronico</span>
          <span class="message">Mensaje</span>
          <span class="coordinates">Cordenadas</span>
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
            <div class="message">
              <LoadingSkeleton :height="40"/>
            </div>
            <div class="coodinates">
              <LoadingSkeleton :height="40"/>
            </div>

          </div>
          <div class="">
            <div class="row" v-for="request in contactRequests" :key="request.id">
              <span class="id">{{ request.id }}</span>
              <span class="name">{{ request.name }}</span>
              <span class="email">{{request.email}}</span>
              <span class="message">{{ request.message }}</span>
              <span class="coordinates">{{ request.coordinates }}</span>
              <span class="options"><span class="pi pi-trash"></span></span>
            </div>
          </div>
          <div class="noDataMessage" v-if="!isLoading && !contactRequests.length">No encontré nada para ti :( </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import {getContactRequestsHelper} from '@/helpers/contactUsHelper'
import LoadingSkeleton from '@/components/LoadingSkeleton.vue';
const contactRequests = ref([])
const isLoading = ref(false)

onMounted(() => {
  getContactRequests()
})

async function getContactRequests() {
  isLoading.value = true
  const {success, data} = await getContactRequestsHelper()
  contactRequests.value = data
  isLoading.value = false
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
  background-color: #4759E4
  color: #fff
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
.message
  width: 25%
.coordinates
  width: 20%
.rowsContainer
  display: flex
  flex-direction: column
.row
  display: flex
  align-items: center
  min-height: 50px
  font-size: 14px
  border-bottom: 1px solid #EFF3F7
.noDataMessage
  text-align: center
  padding: 2rem
  font-weight: 500
</style>