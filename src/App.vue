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
