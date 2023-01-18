<template>
  <nav
    class="flex items-center justify-end sm:justify-start w-full sm:w-2/4 h-full gap-[30px] text-grey pl-4"
  >
    <router-link to="/">My Tasks</router-link>
    <router-link to="/profile">My Profile</router-link>
    <router-link to="/profile" class="sm:ml-auto">
      <img alt="Vue logo" src="../../assets/icons/avatar.svg" />
    </router-link>
  </nav>
</template>
