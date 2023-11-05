<script lang="ts">
export default {
  data() {
    return {
      count: 1
    }
  },
  mounted() {
    console.log(this.count)

    this.count = 2
  },
  methods: {
    increment() {
      this.count++
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
