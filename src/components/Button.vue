<template>
  <a
    :class="cn(
        'no-underline w-fit px-8 py-5 font-bold bg-primary rounded text-zinc-50 cursor-pointer hover:bg-primary/80',
        className,
      )"
    :href="props.href"
  >
  {{props.label}}
  </a>
</template>

<script setup lang="ts">
import { cn } from "../utils/cn";
import { defineProps } from 'vue';

const props = defineProps({
  className: String,
  href: String,
  label: String,
});


</script>
