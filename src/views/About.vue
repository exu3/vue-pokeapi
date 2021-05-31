<template>
  <div class="about">
    <div
      v-if="pokemon"
      class="w-7/12 md:w-1/4 m-auto shadow-2xl flex justify-center flex-col items-center p-4 rounded-xl border-8 border-yellow-300"
    >
      <h3 class="text-2xl text-green-900 uppcase">{{ pokemon.name }}</h3>
      <div class="flex justify-center">
        <img class="w-48" :src="pokemon.sprites.front_shiny" alt="" />
        <img class="w-48" :src="pokemon.sprites.back_shiny" alt="" />
      </div>
      <h3 class="text-yellow-400">Types</h3>
      <div v-for="(type, idx) in pokemon.types" :key="idx">
        <h5 class="text-blue-900">{{ type.type.name }}</h5>
      </div>
    </div>
  </div>
</template>

<script>
import { useRoute } from "vue-router";
import { reactive, toRefs } from "vue";
export default {
  setup() {
    const route = useRoute();
    const state = reactive({
      pokemon: null,
    });

    fetch(`https://pokeapi.co/api/v2/pokemon/${route.params.slug}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        state.pokemon = data;
      });

    return { ...toRefs(state) };
  },
};
</script>
