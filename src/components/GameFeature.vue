<template >
  <div class="w-full flex flex-col justify-center items-center p-12 lg:p-20 xl:p-32">
    <div class="mb-20">
      <h1 class="text-5xl font-bungee">
        features matter
      </h1>
      <p>We offer a number of unique features aimed at making the experience more immersive and the betting more satisfying for our users.</p>
    </div>
 <div class="w-full xl:w-1/2 text-left text-gray-200 grid gap-6 mb-6 md:grid-cols-3 items-center justify-center">
     
        <div class="w-full flex flex-col items-start justify-center gap-2 max-w-[23.75rem]" v-for="(feature, index) in gamefeatures" :key="index">
                <img
                  class=""
                  alt=""
                  :src="feature.image"
                />
                <h3 class="text-xl font-extrabold  font-roboto mt-4">
                  {{feature.title}}
                </h3>
                <p> {{feature.description}} </p>
        </div>
        <div class="w-full flex flex-col items-start justify-start gap-2">
          <h3 class=" font-extrabold font-roboto text-3xl">
            Ready to start
          </h3>
          <p>
            Do not hesitate to contact us if you want to test
            our live games. Our team is always available at
            your disposal and will be glad to answer all your
            questions regarding
          </p>
          <RouterLink 
            :to="{ name: 'contact' }"
          >
            <Button class="btn-lg">
              Request demo
            </Button>
          </RouterLink>
        <!-- </div> -->
      </div>
    </div></div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { RouterLink } from 'vue-router';
import Button from './Button.vue';

const gamefeatures = ref([
  {
    title: 'Swipe to Bet',
    description: 'Swipe your finger on the board on your mobile device to bet on all possible sections along the way just like in the casino. Go back and forth to increase the section’s bet.',
    image: '/swipedade80a7svg.svg'
  },
  {
    title: 'Operator Customizable',
    description: 'Open for all players on the table – let them chat with the dealer, one another, or open a channel with a support agent right from the table',
    image: '/bets2d7692b0svg.svg'
  },
  {
    title: 'Favorite Bets',
    description: 'Option for players to save their multiple favourite bets in order to provide them with a simple and faster betting experience.',
    image: '/bets2d7692b0svg.svg'
  },
  {
    title: 'Favorite Bets',
    description: 'Option for players to save their multiple favourite bets in order to provide them with a simple and faster betting experience.',
    image: '/bets2d7692b0svg.svg'
  },
  {
    title: 'Favorite Bets',
    description: 'Option for players to save their multiple favourite bets in order to provide them with a simple and faster betting experience.',
    image: '/bets2d7692b0svg.svg'
  },
  {
    title: 'Favorite Bets',
    description: 'Option for players to save their multiple favourite bets in order to provide them with a simple and faster betting experience.',
    image: '/bets2d7692b0svg.svg'
  },
  {
    title: 'Favorite Bets',
    description: 'Option for players to save their multiple favourite bets in order to provide them with a simple and faster betting experience.',
    image: '/bets2d7692b0svg.svg'
  },{
    title: 'Favorite Bets',
    description: 'Option for players to save their multiple favourite bets in order to provide them with a simple and faster betting experience.',
    image: '/bets2d7692b0svg.svg'
  },
  // Adicione os outros itens aqui
]);

</script>
