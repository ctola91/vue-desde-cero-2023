<script setup lang="ts">
import { computed, reactive } from 'vue';

const cart = reactive({
  category: 'hosting',
  description: 'Carrito de compras de EDteam',
  currency: 'USD',
  items: [
    {
      id: 1,
      name: 'basic',
      price: 20
    },
    {
      id: 2,
      name: 'medium',
      price: 30
    },
    {
      id: 3,
      name: 'pro',
      price: 40
    },
  ]
})

const message = computed({
  get() {
    return cart.description
  },
  set(newVal) {
    cart.description = newVal
  }
})

const totalPrice = computed(() => {
  return cart.items.reduce((accumulator, current) =>
    accumulator + current.price, 0)
})

const quantity = computed(() => cart.items.length)

</script>
    
<template>
  <div>
    {{ message }}
  </div>
  <div>
    Precio Total: {{ totalPrice }} {{ cart.currency }}
  </div>
  <input v-model="message" type="text">
  <div>
    Elementos del carrito: {{ quantity }}
  </div>
</template>


<style scoped></style>