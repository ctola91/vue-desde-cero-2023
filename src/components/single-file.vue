<script setup lang="ts">
import { ref } from 'vue';

// LOGICA APP
const saludo = ref("Hello EDteam")
</script>

<template>
  <!-- HTML / ESTRUCTURA DEL COMPONENTE -->
  <div>
    {{ saludo }}
  </div>
</template>

<style scoped></style>