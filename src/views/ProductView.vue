<script setup lang="ts">
import { useRoute, useRouter } from 'vue-router';

// this.$router
const router = useRouter()
// this.$route
const route = useRoute()


</script>
    
<template>
  <div>
    <h1>Product {{ route.params.id }}</h1>
  </div>
</template>


<style scoped></style>