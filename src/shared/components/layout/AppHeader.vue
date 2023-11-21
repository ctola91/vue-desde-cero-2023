<script setup lang="ts">
import { inject, computed } from 'vue'
import logo from "@/assets/logo.svg"

const cart = inject('cart')

const totalCart = computed(() => cart.value.length)
</script>
    
<template>
  <div class="flex flex-row align-center w-100">
    <img :src="logo" alt="Logo" width="30" />
    <div class="menu">
      <ul class="flex flex-row">
        <li>Home</li>
        <li>Products</li>
        <li>About</li>
      </ul>
    </div>
    <div class="">
      cart: {{ totalCart }}
    </div>
  </div>
</template>


<style scoped></style>