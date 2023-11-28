<script setup lang="ts">
import { inject, type Ref } from 'vue';
import ProductList from '@/components/products/ProductList.vue';
import type { Product } from '@/interfaces/Product';

const cart = inject<Ref<Product[]>>('cart')

const products: Product[] = [
  {
    id: 1,
    name: "Curso de Vue.js desde cero",
    price: 20,
    isAvailable: true
  },
  {
    id: 2,
    name: "Curso de React.js desde cero",
    price: 20,
    isAvailable: true
  },
  {
    id: 3,
    name: "Curso de Angular desde cero",
    price: 20,
    isAvailable: false
  },
  {
    id: 4,
    name: "Curso de HTML desde cero",
    price: 20,
    isAvailable: false
  },
]

const onAddToCart = (product: Product) => {
  console.log(product)
  cart?.value.push(product)
}
</script>

<template>
  <main>
    <ProductList :products="products" @add-to-cart="onAddToCart" />
  </main>
</template>
