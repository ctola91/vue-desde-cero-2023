<script setup lang="ts">
import { useRoute } from 'vue-router';

const route = useRoute()
</script>
    
<template>
  <div>
    <h1>User {{ route.params.id }}</h1>
    <div class="flex flex-row gap-s">
      <RouterLink to="profile">Perfil</RouterLink>
      <RouterLink to="posts">Posts</RouterLink>
    </div>
    <RouterView />
  </div>
</template>


<style scoped></style>