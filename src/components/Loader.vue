<template>
  <div>
      <svg class="animate-spin h-5 w-5 mr-3" viewBox="0 0 24 24"></svg>
  </div>
</template>

<script setup>
import { defineProps } from "vue";
defineProps({
  Loading: Boolean,
});
</script>
