<script setup lang="ts">
import useProduct from "@/composables/useProduct"

const { name, price, isAvailable, submit } = useProduct()
</script>
    
<template>
  <div>
    <h1>New</h1>
    <div class="flex flex-column gap-xs">
      <label>Nombre:</label>
      <input v-model="name" type="text" />
    </div>
    <div class="flex flex-column gap-xs">
      <label>Precio:</label>
      <input v-model="price" type="number" />
    </div>
    <div class="flex flex-row gap-xs align-start">
      <label>Esta disponible:</label>
      <input v-model="isAvailable" type="checkbox" />
    </div>
    <div class="flex flex-column gap-xs">
      <button @click="submit">Guardar</button>
    </div>
  </div>
</template>


<style scoped></style>