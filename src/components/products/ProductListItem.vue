<script setup lang="ts"></script>
    
<template>
  <div class="flex flex-column gap-xs product-list-item">
    <div class="title">
      <slot name="title"></slot>
    </div>
    <div class="w-100   flex justify-center">
      <img src="https://placehold.co/200" alt="image" />
    </div>
    <div class="description">
      <slot name="price"></slot>
    </div>
    <div class="button-container">
      <slot></slot>
    </div>
  </div>
</template>

<style scoped></style>