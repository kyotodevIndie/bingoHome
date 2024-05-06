<script setup lang="ts">
import ContactCard from '../components/ContactCard.vue';

</script>

<template>
      <div class="w-full bg-tertiary flex flex-col items-center justify-center pt-60 pb-32 text-secondary gap-12">
        <div class="text-center">
          <h1 class="text-5xl font-bungee">Contact us</h1>
          <p class="font-roboto mt-4">
            Drop us a line and we`ll happily answer all your questions.
          </p>
        </div>
        <ContactCard />
        <div class="text-center my-4">
          <p>
            If you are interested in our products and services, feel free to use
            the form above or
          </p>
          <span>
            email us at 
            <a
              href="mailto:talk@banana.games"
              target="_blank"
              rel="noreferrer"
            >
              <b>talk@banana.games</b>
            </a>
          </span>
        </div>
      </div>
</template>