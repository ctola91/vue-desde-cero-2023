<script setup lang="ts">
import { inject, computed, onMounted, ref, type Ref } from 'vue'
import logo from "@/assets/logo.svg"
import { useRouter } from 'vue-router';
import type { Product } from '@/interfaces/Product';

const router = useRouter()
const cart = inject<Ref<Product[]>>('cart')
const userId = ref<string>("")

onMounted(() => {
  // llamar a BD para obtener el ID
  userId.value = (Math.random() * 10).toFixed(0)
})

const totalCart = computed(() => cart ? cart?.value.length : 0)

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
  <div class="flex flex-row align-center justify-space-between w-100 app-header">
    <div class="flex flex-row">
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
    </div>
    <div class="cart-link">
      <a @click="redirectToProfile">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
          <path fill="currentColor"
            d="M17 18a2 2 0 0 1 2 2a2 2 0 0 1-2 2a2 2 0 0 1-2-2c0-1.11.89-2 2-2M1 2h3.27l.94 2H20a1 1 0 0 1 1 1c0 .17-.05.34-.12.5l-3.58 6.47c-.34.61-1 1.03-1.75 1.03H8.1l-.9 1.63l-.03.12a.25.25 0 0 0 .25.25H19v2H7a2 2 0 0 1-2-2c0-.35.09-.68.24-.96l1.36-2.45L3 4H1V2m6 16a2 2 0 0 1 2 2a2 2 0 0 1-2 2a2 2 0 0 1-2-2c0-1.11.89-2 2-2m9-7l2.78-5H6.14l2.36 5H16Z" />
        </svg>
        <span v-if="totalCart > 0">{{ totalCart }}</span></a>
    </div>
  </div>
</template>


<style scoped></style>