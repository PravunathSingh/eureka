<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router';
import Navbar from './components/ui/Navbar.vue';
</script>

<template>
  <main>
    <Navbar />
  </main>
  <RouterView />
</template>
