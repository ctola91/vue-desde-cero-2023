<script setup lang="ts">
import { ref } from 'vue'

const count = ref(0)

const increment = () => {
  count.value++
}
</script>

<template>
  <div class="flex align-center flex-column">
    <div>
      {{ count }}
    </div>
    <div>
      <button @click="increment">Incrementar</button>
    </div>
  </div>
</template>

<style scoped></style>
