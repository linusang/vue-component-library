<template>
  <button class="rounded px-4 py-2 shadow" v-bind:disabled="isProcessing">
    <slot :is-processing="isProcessing"></slot>
  </button>
</template>
<script setup lang="ts">
  interface Props {
    isProcessing: boolean;
  }

  const props = withDefaults(defineProps<Props>(), {
    isProcessing: false,
  });
</script>
