<script setup lang="ts">
import Menubar from 'primevue/menubar';
import {ref} from 'vue';
import {PrimeIcons} from '@primevue/core/api';
import {useRouter} from 'vue-router';
import {RouteNames} from '../../router';

const router = useRouter();

const navigate = (route: string) => {
  return () => {
    router.push({name: route});
  };
};

const items = ref([
  {label: 'Home', icon: PrimeIcons.HOME, command: navigate(RouteNames.Home)},
  {label: 'About', icon: PrimeIcons.USER, command: navigate(RouteNames.About)},
]);
</script>

<template>
  <div class="card">
    <Menubar class="my-app-dark" :model="items" />
  </div>
</template>
