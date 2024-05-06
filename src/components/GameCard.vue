<template>
    <div class="flex flex-col  sm:w-[90%] md:w-96 max-md:ml-0 mt-6" @click="() => $router.replace({path: `/game/${id}`})">
      <div class="flex flex-col grow justify-start w-full text-gray-50 bg-tertiary rounded-lg">
        <img
          :src="imageSrc"
          class="w-full rounded-[12px_12px_0_0]"
        />
        <div class="flex flex-col justify-end py-8 pr-16 pl-5  max-md:pr-5 ">
          <h3 class="text-xl font-extrabold  max-md:max-w-full font-roboto">
            {{ name }}
          </h3>
          <p class="mt-4 text-base  max-md:max-w-full">
            {{ description }}
          </p>
        </div>
      </div>
    </div>
</template>

<script setup lang="ts">

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
