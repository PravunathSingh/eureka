<script lang="ts" setup>
import { ref } from 'vue';
import { useIdeasStore } from '@/stores/ideas.js';
// import router from '@/router';
// import HomeView from '@/views/HomeView.vue';
const ideasStore = useIdeasStore();

type Tags = string[];

const ideas = ref({
  id: Math.random(),
  title: '',
  gist: '',
  tags: <Tags>[],
});

const addTag = (event: KeyboardEvent) => {
  if (event.code === 'Comma' || event.code === 'Space') {
    const target = event.target as HTMLInputElement;
    const tag = target.value.trim();
    ideas.value.tags.push(tag);
    target.value! = '';
  }
};

const removeTag = (index: number) => {
  ideas.value.tags.splice(index, 1);
};

const addIdea = (e: MouseEvent) => {
  e.preventDefault();
  const idea = ideas.value;
  if (idea.title && idea.gist && idea.tags.length) {
    console.log(idea);
    ideasStore.addIdea(idea);
    ideas.value = {
      id: Math.random(),
      title: '',
      gist: '',
      tags: [],
    };
  }
};
</script>

<template>
  <div class="container max-w-2xl mx-auto my-20 text-gray-100 lg:my-28">
    <h1 class="mb-8 text-xl text-center lg:text-2xl lg:mb-12">
      Add Your Ideas
    </h1>

    <div class="px-6 py-4 bg-gray-700 rounded-lg">
      <form>
        <div class="mb-5 lg:mb-8">
          <p class="mb-2 lg:text-lg"><label>Title</label></p>
          <input
            type="text"
            class="w-full px-3 py-2 bg-transparent border border-gray-400 rounded-md"
            name="title"
            v-model="ideas.title"
          />
        </div>
        <div class="mb-5">
          <p class="mb-2 lg:text-lg"><label>Idea Gist</label></p>
          <textarea
            rows="8"
            type="text"
            class="w-full px-3 py-2 bg-transparent border border-gray-400 rounded-md"
            name="title"
            v-model="ideas.gist"
          />
        </div>
        <div class="mb-5 lg:mb-8">
          <p class="mb-2 lg:text-lg">
            <label
              >Tags
              <span class="text-sm text-gray-300"
                >(add up to 4 tags)</span
              ></label
            >
          </p>
          <div class="border border-gray-400 rounded-md">
            <div
              v-if="ideas.tags.length !== 0"
              class="flex items-center gap-4 px-3 py-2 text-sm"
            >
              <div
                v-for="(tag, index) in ideas.tags"
                :key="tag"
                class="px-2 py-1 font-medium text-black rounded-full cursor-pointer opacity-80 bg-accent"
              >
                <span @click="removeTag(index)">X</span>
                {{ tag }}
              </div>
            </div>
            <input
              type="text"
              class="w-full px-3 py-2 bg-transparent outline-none"
              name="title"
              @keydown="addTag"
              @keydown.delete="removeTag(ideas.tags.length - 1)"
            />
          </div>
        </div>

        <button
          type="submit"
          @click="addIdea"
          class="w-full py-2 mt-6 mb-4 text-lg font-medium text-gray-900 rounded-md appearance-none xl:text-xl bg-accent"
        >
          Add Idea
        </button>
      </form>
    </div>
  </div>
</template>
