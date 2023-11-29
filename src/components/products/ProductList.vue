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
    <ul class="flex flex-wrap justify-center product-list">
      <!-- <li v-for="product in products" :key="product.id" class="flex flex-column gap-xs">
        <div>{{ product.name }}</div>
        <div>{{ product.price }}</div>
        <button @click="() => addToCart(product)">Agregar al carrito</button>
      </li> -->
      <li v-for="product in products" :key="product.id" class="flex flex-column gap-xs">
        <ProductListItem>
          <template #title>
            <a class="cursor-pointer">{{ product.name }}</a>
          </template>
          <template #price>
            <p class="product-price">{{ product.price }} $us</p>
          </template>
          <template #default>
            <button :class="{ disabled: !product.isAvailable, active: product.isAvailable }"
              class="flex flex-row justify-center gap-s align-center bg-emerald-700" @click="() => addToCart(product)">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                <path fill="currentColor"
                  d="M0 1h4.764l3 11h10.515l3.089-9.265l1.897.633L19.72 14H7.78l-.5 2H22v2H4.72l1.246-4.989L3.236 3H0V1Zm14 1v3h3v2h-3v3h-2V7H9V5h3V2h2ZM4 21a2 2 0 1 1 4 0a2 2 0 0 1-4 0Zm14 0a2 2 0 1 1 4 0a2 2 0 0 1-4 0Z" />
              </svg>
              Agregar al
              carrito</button>
          </template>
        </ProductListItem>
      </li>
    </ul>
  </div>
</template>

<style scoped></style>