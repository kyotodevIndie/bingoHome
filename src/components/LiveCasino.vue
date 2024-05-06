<template>
  <div
    class="bg-[url('/banana1Bg.svg')] bg-contain bg-no-repeat bg-bottom bg-black flex flex-col w-full px-12 md:px-24 py-12 justify-center items-center"
  >
    <header class="flex flex-col w-full lg:w-1/2">
      <h1 class="text-6xl tracking-wider leading-[75.52px] max-md:max-w-full max-md:text-4xl font-bungee">
        Live Casino
      </h1>
      <p class="mt-11 text-base leading-8 max-md:mt-10 max-md:max-w-full">
        With eight different live dealer games, our product portfolio includes
        everything from classics like Roulette, Blackjack and Baccarat to
        specific regional games such as Andar Bahar.
      </p>
    </header>
    <section class="mt-14 max-md:mt-10 max-md:max-w-full">
      <div class="flex gap-6 max-md:flex-col max-md:gap-0 items-center justify-center">
        <GameCard v-for="(game, index) in games" :key="index" v-bind="game" />
      </div>   
    </section>
    <section class="flex flex-col justify-center self-center px-20 py-16 mt-14 max-w-full text-base text-gray-50 bg-tertiary rounded-lg w-[1200px] max-md:px-5 max-md:mt-10">
      <h3 class="leading-[215%] max-md:mr-1.5 max-md:max-w-full font-roboto">
        Premium HD video quality combined with the most attractive dealers around.
      </h3>
      <p class="mt-2 leading-8 max-md:mr-1.5 max-md:max-w-full ">
        Our diverse portfolio of live games is combined with the option of choosing between English, Turkish, or Bulgarian-speaking croupiers allows for the targeting various regions of the world.
      </p>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import GameCard from './GameCard.vue';

const games = ref([
  {
    id: 1,
    name: 'Roleta',
    description:
      'Our roulette is based on the traditional European form, with a 37-number wheel and a single zero.',
    imageSrc:
      '/roletaBgCard.png',
    imageAlt: 'Roulette game table',
  },
  {
    id:2,
    name: 'Bingo',
    description:
    'Our roulette is based on the traditional European form, with a 37-number wheel and a single zero.',
    imageSrc:
      '/bingoBgCard.png',
    imageAlt: 'Bingo game',
  },
  {
    id:3,
    name: 'Roda',
    description:
    'Our roulette is based on the traditional European form, with a 37-number wheel and a single zero.',

    imageSrc:
      '/rodaBgCard.png',
    imageAlt: 'roda Game',
  },
]);

</script>
