<script setup lang="ts">
import Navbar from '../components/Navbar.vue'
import Features from '../components/Features.vue'
import LiveCasino from '../components/LiveCasino.vue'
import Footer from '../components/Footer.vue'
</script>

<template>
  <div class="w-full">
      <Navbar />
      <img
        class="max-w-full overflow-hidden max-h-full object-cover pt-20 md:pt-14"
        alt=""
        src="/image-1@2x.png"
      />
      <Features />
      <LiveCasino />
      <Footer />
    </div>
</template>