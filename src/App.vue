<template>
  <router-view v-slot="{Component}">
    <transition name="fade" mode="out-in">
      <component :is="Component" />
    </transition>
  </router-view>
</template>

<style lang="scss">
  .fade-enter-from,
  .fade-leave-to {
    opacity: 0;
    transform: scale(1);
  }

  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 0.5s ease, transform 0.5s ease;
  }
</style>
