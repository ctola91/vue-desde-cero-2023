<script setup lang="ts">
import { defineProps, toRef } from 'vue'
import ProductListItem from '@/components/products/ProductListItem.vue'
import type { Product } from '@/interfaces/Product'

interface Props {
  products: Product[]
}


const props = defineProps<Props>()
const products = toRef(props, "products")

const emit = defineEmits<{
  (e: 'addToCart', product: Product): void
}>()

const addToCart = (product: Product) => {
  emit('addToCart', product)
}
</script>

<template>
  <div>
    <ul class="flex product-list">
      <!-- <li v-for="product in products" :key="product.id" class="flex flex-column gap-xs">
        <div>{{ product.name }}</div>
        <div>{{ product.price }}</div>
        <button @click="() => addToCart(product)">Agregar al carrito</button>
      </li> -->
      <li v-for="product in products" :key="product.id" class="flex flex-column gap-xs">
        <ProductListItem>
          <template #title>
            <h3>{{ product.name }}</h3>
          </template>
          <template #price>
            <p>{{ product.price }}</p>
          </template>
          <template #default>
            <button :class="{ disabled: !product.isAvailable, active: product.isAvailable }"
              @click="() => addToCart(product)">Agregar al
              carrito</button>
          </template>
        </ProductListItem>
      </li>
    </ul>
  </div>
</template>

<style scoped></style>