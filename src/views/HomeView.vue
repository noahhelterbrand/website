<script setup lang="ts">
import Button from 'primevue/button';

import {findFibonacci} from './helper.ts';
import {CustomApplicationBar} from '../components/stateless/index.ts';

defineProps<{msg: string}>();
</script>

<template>
  <div class="homepage">
    <div>
      <CustomApplicationBar />
    </div>
    <div class="page">
      <div>
        <Button>First button</Button>
        {{ findFibonacci(4) }}
      </div>
      <div>More Content</div>
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
