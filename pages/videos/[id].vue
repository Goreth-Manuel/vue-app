<template>
  <div>Você está no vídeo número {{ idParams }}</div>
</template>

<script setup>
const route = useRoute();

const idParams = computed(() => route.params.id);
</script>

<style lang="scss" scoped></style>
