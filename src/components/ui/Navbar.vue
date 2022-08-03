<script setup lang="ts">
import { RouterLink } from 'vue-router';
</script>

<template>
  <nav class="py-3 border-b lg:py-5 border-accent">
    <div class="container flex items-center justify-between">
      <div>
        <h2 class="text-2xl font-medium text-accent lg:text-3xl">
          <RouterLink to="/">Eureka</RouterLink>
        </h2>
      </div>

      <ul>
        <li class="text-gray-400 lg:text-lg hover:text-accent">
          <RouterLink to="/add-ideas">Add Ideas</RouterLink>
        </li>
      </ul>
    </div>
  </nav>
</template>
