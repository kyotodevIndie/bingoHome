<template>
  <section class="flex justify-center items-center px-16 py-20 w-full bg-neutral-900 max-md:px-5 max-md:max-w-full">
    <div class="flex flex-col mt-9 max-w-full w-[1089px]">
      <h2 class="text-6xl tracking-wider text-gray-50 leading-[76.2px] max-md:max-w-full max-md:text-4xl font-bungee">
        Why Banana Games?
      </h2>
      <p class="mt-11 text-base leading-8 text-neutral-200 max-md:mt-10 max-md:max-w-full">
        Because we are dedicated in helping your online casino realize its
        potential by providing the highest- quality gaming content and
        ensuring an immersive user experience.
      </p>
      <div class="mt-12 max-md:mt-10 max-md:max-w-full">
        <div class="flex gap-5 max-md:flex-col max-md:gap-0">
          <FeatureItem v-for="(item, index) in featureItems.slice(0, 4)" :key="index" :imageSrc="item.imageSrc" :title="item.title" :description="item.description" />
        </div>
      </div>
      <div class="mt-20 max-md:pr-5 max-md:mt-10 max-md:max-w-full">
        <div class="flex gap-5 max-md:flex-col max-md:gap-0">
          <FeatureItem v-for="(item, index) in featureItems.slice(4)" :key="index" :imageSrc="item.imageSrc" :title="item.title" :description="item.description" />
          <div class="flex flex-col ml-5 w-[51%] max-md:ml-0 max-md:w-full">
            <div class="flex flex-col grow mt-2.5 text-base mapdx-md:mt-10 max-md:max-w-full">
              <h3 class="text-4xl leading-10 text-zinc-50 max-md:max-w-full font-roboto">
                Become a Partner
              </h3>
              <p class="mt-2 leading-8 text-neutral-200 max-md:mt-10 max-md:max-w-full">
                In order to achieve our partners' vision, we give them the
                opportunity to personalise their solutions in many ways.
                Modifying existing content or creating a new content from
                scratch.
              </p>
              <Button class="mt-10" href="/contact">
                Get in touch
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import Button from './Button.vue';
import FeatureItem from './FeatureItem.vue';

const featureItems = [
  {
    imageSrc:
      'https://cdn.builder.io/api/v1/image/assets/TEMP/80c328e5b26317a87b902536e05b8ca592359ca303df95698926dbded8e7c002?apiKey=1c64a5536cb84c2d95c98300c1c7a69b&',
    title: 'In-house development',
    description: 'Years of experience in game development and studio services.',
  },
  {
    imageSrc:
      'https://cdn.builder.io/api/v1/image/assets/TEMP/ab68ecf8385cf3a3a1fe2220c8708ac5b6dc1c7d5992d309b8387594ef19b660?apiKey=1c64a5536cb84c2d95c98300c1c7a69b&',
    title: 'Own studios',
    description: 'Flawless graphics and sounds. Low latency video streaming.',
  },
  {
    imageSrc:
      'https://cdn.builder.io/api/v1/image/assets/TEMP/81f1fc2ceeb9381fbb7a110609bf79521993d11a265b1cc2e3773002762e1571?apiKey=1c64a5536cb84c2d95c98300c1c7a69b&',
    title: 'Customization options',
    description: 'We can deliver what you want, the way you want it.',
  },
  {
    imageSrc:
      'https://cdn.builder.io/api/v1/image/assets/TEMP/15eb0d25135a76d0359c388f8a5a315e02d40fe51c1c70c23a03ba22b6117f31?apiKey=1c64a5536cb84c2d95c98300c1c7a69b&',
    title: 'Fast and secure',
    description: 'Our HTML5 games are optimized for best performance.',
  },
  {
    imageSrc:
      'https://cdn.builder.io/api/v1/image/assets/TEMP/d487777051d3a091aef658a942845b82aeafaba79acbfe8003f84776f2df35fd?apiKey=1c64a5536cb84c2d95c98300c1c7a69b&',
    title: 'Singlepoint integration',
    description:
      'Casino games, Slots, Backoffice in a complete Live Casino Experience.',
  },
  {
    imageSrc:
      'https://cdn.builder.io/api/v1/image/assets/TEMP/af6d81fc80a3ca81a35d134f5a05d7f1c64e587815f28cd0def2aac50ac6d963?apiKey=1c64a5536cb84c2d95c98300c1c7a69b&',
    title: 'Multi-platform',
    description: 'Supporting most popular platforms and operation systems.',
  },
]
</script>
