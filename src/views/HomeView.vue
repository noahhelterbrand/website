<script setup lang="ts">
import {CustomApplicationBar} from '../components/stateless/index.ts';
import HomeIntro from '../components/stateless/HomeIntro.vue';

defineProps<{msg: string}>();
</script>

<template>
  <div class="homepage">
    <div>
      <CustomApplicationBar />
    </div>
    <div class="page">
      <div>
        <HomeIntro />
      </div>

      <RouterView />
    </div>
  </div>
</template>

<style scoped>
.homepage {
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
}
.page {
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  height: 100%;
  width: 100%;
}
</style>
