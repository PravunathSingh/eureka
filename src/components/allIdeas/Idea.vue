<script lang="ts" setup>
import { defineProps } from 'vue';
import { useIdeasStore } from '@/stores/ideas.js';
const ideas = useIdeasStore();

defineProps({
  id: Number,
  title: String,
  gist: String,
  tags: [],
});
</script>

<template>
  <div class="bg-gray-800 rounded-md p-7">
    <div class="flex items-center justify-between">
      <h6 class="text-2xl font-medium lg:text-3xl text-accent">{{ title }}</h6>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="w-8 h-8 text-red-400 cursor-pointer"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        stroke-width="2"
        @click="ideas.deleteIdea(id)"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
        />
      </svg>
    </div>
    <p class="my-5 leading-normal text-gray-300 lg:my-8">
      {{ gist }}
    </p>

    <div class="flex items-center gap-4">
      <div v-for="tag in tags" :key="tag">
        <p
          class="px-2 py-1 text-sm font-medium text-black rounded-full cursor-pointer opacity-70 bg-accent"
        >
          {{ tag }}
        </p>
      </div>
    </div>
  </div>
</template>
