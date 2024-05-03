<template>
  <div
    class="bg-[url('/banana1Bg.svg')] bg-contain bg-no-repeat bg-bottom bg-black flex flex-col w-full px-12 md:px-24 py-12"
  >
    <header class="flex flex-col md:ml-72 max-w-full text-gray-50 w-[632px]">
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
      <div class="flex gap-6 max-md:flex-col max-md:gap-0">
        <GameCard v-for="(game, index) in games" :key="index" v-bind="game" />
      </div>
    </section>
    <section class="flex flex-col justify-center self-center px-20 py-16 mt-14 max-w-full text-base text-gray-50 bg-neutral-900 rounded-lg w-[1110px] max-md:px-5 max-md:mt-10">
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
      'https://cdn.builder.io/api/v1/image/assets/TEMP/a8614897010fae843ce303aac24e94eb17883815b87eeaa9b2cffd75662ebd58?apiKey=1c64a5536cb84c2d95c98300c1c7a69b&',
    imageAlt: 'Roulette game table',
  },
  {
    id:2,
    name: 'Bingo',
    description:
    'Our roulette is based on the traditional European form, with a 37-number wheel and a single zero.',
    imageSrc:
      'https://cdn.builder.io/api/v1/image/assets/TEMP/268e4957639a78b290de6efc6f536aad21a6871d990512ee5cc28dff188eb5d7?apiKey=1c64a5536cb84c2d95c98300c1c7a69b&',
    imageAlt: 'Bingo game',
  },
  {
    id:3,
    name: 'Roda',
    description:
    'Our roulette is based on the traditional European form, with a 37-number wheel and a single zero.',

    imageSrc:
      'https://cdn.builder.io/api/v1/image/assets/TEMP/351109fdaa3244f4d3f2ef7ed7ff6e0970b5d004901b7b43b70af17e038ebff4?apiKey=1c64a5536cb84c2d95c98300c1c7a69b&',
    imageAlt: 'roda Game',
  },
]);

</script>
