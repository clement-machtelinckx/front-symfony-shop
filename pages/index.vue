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

function addToCart(article) {
  // Vérifiez si le panier existe déjà dans le local storage
  let cart = JSON.parse(localStorage.getItem('cart')) || [];

  // Ajoutez l'article au panier
  cart.push(article);

  // Enregistrez le panier dans le local storage
  localStorage.setItem('cart', JSON.stringify(cart));

  console.log(article);
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
        <button @click="addToCart(a)">Ajouter au panier</button>


      </div>
    </div>
    <p v-else>Loading...</p>
  </div>
</template>
