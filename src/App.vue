<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
import SingleFile from './components/single-file.vue';
import ReactivityFile from './components/reactivity-file.vue';
import ConditionalTest from './components/conditional-test.vue';
import RenderList from './components/render-list.vue';
import ComputedSample from './components/computed-sample.vue';
import EventHandling from './components/event-handling.vue';
import WatchersSample from './components/watchers-sample.vue';
import ProductList from '@/components/products/ProductList.vue'
import type { Product } from '@/interfaces/Product'
import { computed, provide, ref } from 'vue';

const cart = ref<Product[]>([])
provide('cart', cart)
</script>

<template>
  <div class="flex flex-column w-100">
    <AppHeader />
    <!-- <SingleFile /> -->
    <!-- <ReactivityFile /> -->
    <!-- <ConditionalTest /> -->
    <!-- <RenderList /> -->
    <!-- <ComputedSample /> -->
    <!-- <EventHandling /> -->
    <!-- <WatchersSample /> -->
    <!-- <ProductList :products="products" @add-to-cart="onAddToCart" /> -->
    <RouterView></RouterView>
  </div>
</template>

<style>
.flex {
  display: flex;
}

.flex-column {
  flex-direction: column;
}

.flex-row {
  flex-direction: row;
}

.flex-wrap {
  flex-wrap: wrap;
}

.align-center {
  align-items: center;
}

.justify-center {
  justify-content: center;
}

.gap-xs {
  gap: 4px;
}

.gap-s {
  gap: 8px;
}

.gap-m {
  gap: 12px;
}

ul {
  padding: 0
}

.menu ul {
  list-style: none;
}

.menu ul>li {
  padding: 10px;
}

.product-list {
  flex-direction: column;
  gap: 16px;
}

.product-list-item {
  padding: 12px;
  border: solid 1px #eee;
  border-radius: 8px;
}

button {
  padding: 10px;
  border: solid 1px #eee;
  border-radius: 8px;
  background: #03a9f4;
  color: #fff;
  display: block;
  width: 100%;
}

button.disabled {
  background: #eee;
}

.w-100 {
  width: 100%;
}

@media (min-width: 680px) {
  .product-list {
    flex-direction: row;
  }
}
</style>
