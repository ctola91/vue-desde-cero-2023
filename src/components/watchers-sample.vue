<script setup lang="ts">
import { ref, watch } from 'vue';

const message = ref<string>("Hola EDteam")
const error = ref<string>("")

watch(message, (m) => {
  console.log(m)
  if (!m) {
    error.value = "Este campo es requerido"
  } else {
    if (m.length > 15) {
      error.value = "El texto no debe pasar de 15 caracteres"
    } else error.value = ""
  }
})
</script>
    
<template>
  <div class="flex">
    <div>Mensaje: {{ message }}</div>
    <input v-model="message" type="text" />
    <span v-if="error" style="color: red">{{ error }}</span>
  </div>
</template>


<style scoped>
.flex {
  display: flex;
  flex-direction: column;
  gap: 2px;
}
</style>