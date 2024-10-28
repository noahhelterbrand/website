<script setup lang="ts">
import Menubar from 'primevue/menubar';
import {ref} from 'vue';
import {PrimeIcons} from '@primevue/core/api';
import {useRouter} from 'vue-router';

const router = useRouter();

const navigate = (route: string) => {
  return () => {
    router.push(route);
  };
};

const items = ref([
  {label: 'Home', icon: PrimeIcons.HOME, command: navigate('/home')},
  {label: 'About', icon: PrimeIcons.USER, command: navigate('/about')},
]);
</script>

<template>
  <div class="card">
    <Menubar :model="items" />
  </div>
</template>
