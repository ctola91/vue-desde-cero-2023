<script setup lang="ts">
import type { Product } from '@/interfaces/Product';
import { inject, type Ref } from 'vue';

const cart = inject<Ref<Product[]>>('cart')
</script>
    
<template>
  <div>
    <h2>Perfil del usuario</h2>
    <ul>
      <li v-for="item in cart" :key="item.id">
        {{ item.name }}
      </li>
    </ul>
  </div>
</template>


<style scoped></style>