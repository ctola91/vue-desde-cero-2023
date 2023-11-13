<script setup lang="ts">
import { reactive, ref } from 'vue';

const message = ref<string>("Hola EDteam")
const isVisible = ref<boolean>(true)
const total = ref<number>(100)

// const user = ref({
//   firstName: 'Juan',
//   lastName: 'Perez',
//   age: 18
// })

interface User {
  firstName: string
  lastName: string
  age: number
  isAdult?: boolean
}

const user = reactive<User>({
  firstName: 'Juan',
  lastName: 'Perez',
  age: 18
})

const actualizar = () => {
  console.log(user.firstName)
  console.log(message.value)
}
</script>
    
<template>
  <div>
    <input v-model="message" type="text" />
    {{ message }}
  </div>
</template>


<style scoped></style>