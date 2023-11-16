<script setup lang="ts">
import { ref } from 'vue';

const names = ref<string[]>([
  'john', 'juan', 'jose', 'Christian', 'Carlos'
])

interface User {
  id: number
  firstName: string
  lastName: string
  age: number
}

const users = ref<User[]>([{
  id: 1,
  firstName: 'john',
  lastName: 'Perez',
  age: 18
},
{
  id: 2,
  firstName: 'juan',
  lastName: 'Perez',
  age: 17
},
{
  id: 3,
  firstName: 'jose',
  lastName: 'Perez',
  age: 25
},
{
  id: 4,
  firstName: 'Christian',
  lastName: 'Perez',
  age: 30
}
])
</script>
    
<template>
  <div>
    <div>
      <h2>Nombres</h2>
      <ul>
        <li v-for="name in names" :key="name">
          {{ name }}
        </li>
      </ul>
      <h2>Usuarios</h2>
      <ul>
        <li v-for="user in users" :key="user.id">
          {{ user.firstName }} {{ user.lastName }}
        </li>
      </ul>
    </div>
  </div>
</template>


<style scoped></style>