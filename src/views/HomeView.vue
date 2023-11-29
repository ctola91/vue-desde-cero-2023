<script setup lang="ts">
import { inject, type Ref } from 'vue';
import ProductList from '@/components/products/ProductList.vue';
import type { Product } from '@/interfaces/Product';
import useProduct from '@/composables/useProduct'

const cart = inject<Ref<Product[]>>('cart')

const { products } = useProduct()

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
