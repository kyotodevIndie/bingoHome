<template>
  <Button @click="scrollToTop" class=" btn btn-primary fixed right-5 bottom-5 rounded-full px-4 py-8" v-show="showButton">
    <Icon icon="tabler:chevron-up" class="text-3xl text-tertiary" />
  </Button>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';
import { Icon } from '@iconify/vue';
import Button from './Button.vue';

const showButton = ref(false);

const handleScroll = () => {
  showButton.value = window.scrollY > 400;
};

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
};
</script>