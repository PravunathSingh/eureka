<script setup lang="ts">
import { ref, onMounted, computed } from 'vue';
import { useIdeasStore } from '@/stores/ideas.js';
import Idea from '@/components/allIdeas/Idea.vue';

const ideas = useIdeasStore();
const allIdeas = computed(() => {
  return ideas.allIdeas;
});

onMounted(() => {
  ideas.getIdeas();
});

const searchTerm = ref('');
</script>

<template>
  <section class="container my-20 lg:my-28">
    <div
      class="flex flex-wrap items-center justify-between mb-10 lg:mb-16 gap-y-6"
    >
      <h4 class="flex-grow text-xl text-gray-100 lg:text-2xl">Your Ideas</h4>
      <div class="flex-grow">
        <input
          type="text"
          placeholder="Search ideas by title"
          name="searchTerm"
          v-model="searchTerm"
          class="w-full px-4 py-2 text-gray-100 bg-transparent border border-gray-500 rounded-md"
        />
      </div>
    </div>

    <div class="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      <div v-for="idea in allIdeas" :key="idea.id">
        <Idea
          :title="idea.title"
          :gist="idea.gist"
          :id="idea.id"
          :tags="idea.tags!"
        />
      </div>
    </div>
  </section>
</template>
