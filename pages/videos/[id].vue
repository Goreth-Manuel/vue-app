<template>
  <div>Você está no vídeo número {{ idParams }}</div>
  <videoDetalhes/>
  <videoControlePlay/>
</template>

<script setup>
definePageMeta({
  layout: "exibicao",
  middleware: "video",
})

const route = useRoute();

const idParams = computed(() => route.params.id);
</script>

<style lang="scss" scoped></style>
