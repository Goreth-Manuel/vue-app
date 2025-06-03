<script setup lang="ts">
const {diasPassados, diferencaEmDias} = useFormatacao();

const dataVideo = new Date(2023, 9, 2)
</script>


<template>
    <h1>Componentes - Nuxt 3</h1>
    <p>Autor: Goreth Manuel</p>
    <p>14 dias atrás</p>
    <p>{{  diferencaEmDias }} dias atrás</p>
</template>