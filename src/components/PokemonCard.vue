<script setup>
   import { defineProps } from "vue";
   const props = defineProps(['pokemon']);
   
</script>

<template>
<div class="max-w-sm rounded overflow-hidden shadow-lg">
        <img class="w-full" :src="props.pokemon.sprites.front_default">
        <div class="px-6 py-4">
            <div class="font-bold text-xl mb-2">{{props.pokemon.name}}</div>
            <p class="text-gray-700 text-base">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
            </p>
        </div>
        <div class="px-6 pt-4 pb-2">
            <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2" v-for="type in props.pokemon.types">{{type.type.name}}</span>
     
        </div>
        </div>
 

</template>

<style>

</style>