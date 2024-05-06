<script setup lang="ts">
import Button from '../components/Button.vue';
</script>

<template>
  <div class="w-full h-full py-52 flex flex-col items-center justify-center gap-4 px-12 text-center shadow-md">
    <img src="/sadBananaCat.png">
    <h1 class="text-5xl font-bungee">Erro 404</h1>
    <span class="text-xl font-roboto ">Sentimos pelo o incoveniente mas a página Não foi encontrada</span>
    <RouterLink :to="{ name: 'home' }"> <Button>Voltar para Home</Button> </RouterLink>
  </div>
</template>