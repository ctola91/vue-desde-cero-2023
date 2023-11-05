<script lang="ts">
import { ref } from 'vue'

export default {
  setup() {
    const count = ref(0)

    function increment() {
      count.value++
    }

    return {
      count,
      increment
    }
  }
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
