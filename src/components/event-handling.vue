<script setup lang="ts">
import { computed, onMounted, onUnmounted, reactive } from 'vue';

interface Cart {
  category: string,
  description: string,
  currency: string,
  items: Item[]
}

interface Item {
  id: number,
  name: string,
  price: number
}

onMounted(() => {
  console.log('Disparando al inicio')
  cart.items = [{
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
  },]
})

onUnmounted(() => {
  console.log('testing')
  alert('Adios')
})
const cart = reactive<Cart>({
  category: 'hosting',
  description: 'Carrito de compras de EDteam',
  currency: 'USD',
  items: [
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

const inputHandler = () => {
  console.log(cart.description)
}
</script>
    
<template>
  <div>
    {{ message }}
  </div>
  <div>
    Precio Total: {{ totalPrice }} {{ cart.currency }}
  </div>
  <div>
    Elementos del carrito: {{ quantity }}
  </div>
  <input v-model="cart.description" type="text" @keyup.enter="inputHandler" />
  <button @click="message = 'Hola desde el curso de vue 3'">
    Actualizar descripcion
  </button>
</template>


<style scoped></style>