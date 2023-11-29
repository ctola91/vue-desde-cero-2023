<script setup lang="ts">
import { inject, computed, onMounted, ref } from 'vue'
import logo from "@/assets/logo.svg"
import { useRouter } from 'vue-router';

const router = useRouter()
const cart = inject('cart')
const userId = ref<string>("")

onMounted(() => {
  // llamar a BD para obtener el ID
  userId.value = (Math.random() * 10).toFixed(0)
})

const totalCart = computed(() => cart.value.length)

const redirectToHome = () => router.push('/')

const redirectToProfile = () => {
  // /user/:id/profile
  router.push({
    name: 'profile',
    params: { id: userId.value }
  })
}
</script>
    
<template>
  <div class="flex flex-row align-center w-100">
    <img :src="logo" alt="Logo" width="30" />
    <div class="menu">
      <ul class="flex flex-row">
        <li><a @click="redirectToHome">Home</a></li>
        <li>
          <RouterLink to="/new">Crear nuevo Producto</RouterLink>
        </li>
        <li>
          <RouterLink to="/about">About</RouterLink>
        </li>
      </ul>
    </div>
    <div class="">
      <a @click="redirectToProfile">cart: {{ totalCart }}</a>
    </div>
  </div>
</template>


<style scoped></style>