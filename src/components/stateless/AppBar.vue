<script setup lang="ts">
import Menubar from 'primevue/menubar';
import {ref} from 'vue';

const items = ref([{label: 'Home'}, {label: 'About'}]);
</script>

<template>
  <Menubar :model="items" />
</template>
