<script setup lang="ts">
import Button from 'primevue/button';
import {computed, ref} from 'vue';

import {findFibonacci} from './helper.ts';

defineProps<{msg: string}>();

const count = ref(1);

const fibonacciCount = computed(() => findFibonacci(count.value));

const buttonCallback = () => {
  console.log('clicked!');
  count.value++;
};
</script>

<template>
  <h1>{{ msg }}</h1>

  <div class="card">
    <Button type="button" @click="buttonCallback">count is {{ count }}</Button>
    Fibonacci of count is {{ fibonacciCount }}
    <p>
      <code>components/HelloWorld.vue</code>
    </p>
  </div>

  <p>
    Check out
    <a href="https://vuejs.org/guide/quick-start.html#local" target="_blank">create-vue</a>
    , the official Vue + Vite starter
  </p>
  <p>
    Leassrn more about IDE Support for Vue in the
    <a href="https://vuejs.org/guide/scaling-up/tooling.html#ide-support" target="_blank">Vue Docs Scaling up Guide</a>
    .
  </p>
  <p class="read-the-docs">Click on the Vite and Vue logos to learn more</p>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
