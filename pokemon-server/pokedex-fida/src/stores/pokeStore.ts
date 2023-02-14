import { reactive } from "vue";
import { defineStore } from "pinia";
import { responseData } from "@/views/functions";

export const usePokeStore = defineStore("poke", () => {
  const pokeState = reactive(responseData);
  return { pokeState };
});
