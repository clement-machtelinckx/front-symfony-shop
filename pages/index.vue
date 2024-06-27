<script setup lang="ts">
import { ref } from 'vue';
const runtimeConfig = useRuntimeConfig();

async function fetchData() {
  const data = await $fetch('https://localhost:8000/api/articles?page=1', {
    headers: {
      Authorization: `Bearer ${localStorage.getItem('token')}`,
    },
  });
  article.value = data;
}

const article = ref(null);

fetchData();

</script>



<template>
  <div>
    <h1>Test</h1>
    <div v-if="article">
      <div v-for="a in article['hydra:member']" :key="a['@id']">
        <h2>{{ a.name }}</h2>
        <h2>{{ a.price }}</h2>
        <p>{{ a.weight }}</p>
        <p>{{ a.price }}</p>
        <p>{{ a.id }}</p>
        <NuxtLink :to="`/articles/${a.id}`">infos</NuxtLink>


      </div>
    </div>
    <p v-else>Loading...</p>
  </div>
</template>
