<script setup>
  import LoadingComponent from "../components/LoadingComponent.vue";
  import PokemonCard from "../components/PokemonCard.vue"
  import { PokemonsService }  from "../services/PokemonsService.js";
  import  { ref }  from "vue";
  import { GENERATION } from "../helpers/enums/GENERATIONS.js";
 const loading = ref(true);
 const pokemonsArr = ref([]);
 main();

  function main(){
    loadPokemons();
  }
  async function loadPokemons(){
    const res = await PokemonsService.getPokemonsByGeneration(GENERATION.PRIMERA);
    pokemonsArr.value = res;
    loading.value = false;
  }
 

</script>

<template>
  <LoadingComponent v-if="loading"></LoadingComponent>

  <div class="w-full flex justify-center gap-10 flex-wrap m-auto mt-10">
     <div v-for="item in pokemonsArr">
        <PokemonCard :pokemon="item"></PokemonCard>
     </div>
       
  </div>
 
 
</template>
