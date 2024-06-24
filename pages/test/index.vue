<script setup>
import { ref } from 'vue';

const route = useRoute();
const { data: pokemon } = await useFetch(`https://pokeapi.co/api/v2/pokemon?limit=151`);
const { data: articles } = await useFetch(`https://localhost:8000/api/articles`);

console.log(pokemon);
</script>

<template>

    <div>
        <h1>Pokemon</h1>
        <ul>
        <li v-for="p in pokemon.results" :key="p.name">
            <NuxtLink :to="`/pokemon/${p.name}`">{{ p.name }}</NuxtLink>

        </li>
        </ul>
    </div>
    <div>
        <h1>Articles</h1>
        <ul>
            <li v-for="a in articles.resultes" :key="a.name">
                <p></p>
            </li>

        </ul>
       
    </div>
</template>