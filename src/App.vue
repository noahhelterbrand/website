<script setup lang="ts">
import {RouterView} from 'vue-router';
</script>

<template>
  <div class="fill">
    <RouterView></RouterView>
  </div>
</template>

<style scoped>
.fill {
  height: 100%;
  width: 100%;
}
</style>
