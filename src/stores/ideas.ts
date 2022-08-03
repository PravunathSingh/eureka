import { defineStore } from 'pinia';
import axios from 'axios';

type Ideas = {
  id: number;
  title: string;
  gist: string;
  tags: string[];
};

type IdeasType = {
  allIdeas: Ideas[];
};

export const useIdeasStore = defineStore('ideas', {
  state: () => {
    return {
      allIdeas: [],
    } as IdeasType;
  },

  getters: {
    getAllIdeas: (state) => {
      return state.allIdeas;
    },
  },

  actions: {
    async addIdea(idea: {
      id: number;
      title: string;
      gist: string;
      tags: string[];
    }) {
      try {
        const response = await axios.post('http://localhost:4000/ideas', idea);
        console.log(response.data);
        this.allIdeas.push(idea);
      } catch (error) {
        console.log(error);
      }
    },
    async getIdeas() {
      try {
        const response = await axios.get('http://localhost:4000/ideas');
        console.log(response.data);
        this.allIdeas = response.data;
      } catch (error) {
        console.log(error);
      }
    },
    async deleteIdea(id: number) {
      try {
        const response = await axios.delete(
          `http://localhost:4000/ideas/${id}`
        );
        console.log(response.data);
        this.allIdeas = this.allIdeas.filter((idea) => idea.id !== id);
      } catch (error) {
        console.log(error);
      }
    },
  },
});
