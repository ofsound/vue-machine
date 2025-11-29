<script setup lang="ts">
import { ref } from 'vue'

const root = ref(null)

// Expose the ref to the parent
defineExpose({
  root,
})
</script>

<template>
  <div>
    <div class="bg-[#827282] text-4xl text-white">Hi, I'm cssTune.</div>
    <div>We're a dedicated team of relentless devs.</div>
  </div>
</template>
