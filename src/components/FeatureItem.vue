<template>
  <div class="flex flex-col w-3/12 max-md:ml-0 max-md:w-full">
    <div class="flex flex-col grow max-md:mt-10">
      <img :src="imageSrc" :alt="title" class="aspect-square w-[70px]" />
      <h3 class="mt-3 text-xl font-extrabold leading-7 text-zinc-50 font-roboto">{{ title }}</h3>
      <p class="mt-3.5 text-base leading-8 text-neutral-200">{{ description }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';

const {imageSrc, title, description} = defineProps({
  imageSrc: String,
  title: String,
  description: String
});
</script>
