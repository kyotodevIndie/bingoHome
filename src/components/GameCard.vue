<template>
  <router-link :to="`/game/${id}`" >
    <div class="flex flex-col w-[33%] sm:w-[90%] max-md:ml-0 max-md:w-full mt-6">
      <div class="flex flex-col grow justify-start w-full text-gray-50 bg-neutral-900 rounded-lg">
        <img
          loading="lazy"
          :src="imageSrc"
          alt=""
          class="w-full rounded-[12px_12px_0_0]"
        />
        <div class="flex flex-col justify-end py-8 pr-16 pl-5  max-md:pr-5 max-md:max-w-full">
          <h3 class="text-xl font-extrabold leading-7 max-md:max-w-full font-roboto">
            {{ name }}
          </h3>
          <p class="mt-7 text-base leading-8 max-md:max-w-full">
            {{ description }}
          </p>
        </div>
      </div>
    </div>
  </router-link>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';

const {imageSrc,
  name,
  description,
  id } = defineProps({
  imageSrc: String,
  name: String,
  description: String,
  id: Number
});

</script>
