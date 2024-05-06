<template>
  <a
    :class="cn(
        'w-fit btn btn-primary font-bold rounded text-zinc-50 cursor-pointer hover:bg-primary/80',
        className,
      )"
    :href="props.href"
  >
  <slot></slot>
  </a>
</template>

<script setup lang="ts">
import { cn } from "../utils/cn";

const props = defineProps({
  className: String,
  href: String,
});


</script>
