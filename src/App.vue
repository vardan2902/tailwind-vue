<template>
  <header-layout />
  <div
    class="flex flex-col justify-center m-auto max-w-[1294px] py-[94px] px-3 xl:px-[0px] [21px]"
  >
    <router-view />
  </div>
</template>

<script lang="ts">
import './index.css';
import HeaderLayout from '@/components/shared/HeaderLayout.vue';

export default {
  name: 'App',
  components: { HeaderLayout },
};
</script>
