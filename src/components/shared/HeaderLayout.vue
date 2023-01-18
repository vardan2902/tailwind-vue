<template>
  <header class="flex justify-center w-full h-[65px] bg-main-blue">
    <div
      class="flex justify-between w-[1440px] items-center px-[20px] xl:px-[80px]"
    >
      <main-logo />
      <nav-links />
    </div>
  </header>
</template>

<script setup lang="ts">
import MainLogo from '@/components/shared/MainLogo.vue';
import NavLinks from '@/components/shared/NavLinks.vue';
</script>
