<template>
  <header class="">
    <nav class="">
      <ul class="header">
        <li><h2><NuxtLink to="/">Home</NuxtLink></h2></li>
        <li><h2><NuxtLink to="/user/connexion">Connexion</NuxtLink></h2></li>
        <li><h2><NuxtLink :to="`/user/1`">Profile</NuxtLink></h2></li>
        <li><h2><NuxtLink to="/articles">Articles</NuxtLink></h2></li>
        <li><h2><NuxtLink to="/cart">Panier</NuxtLink></h2></li>
      </ul>
    </nav>
  </header>
</template>

<script setup>
import jwtDecode from 'jsonwebtoken/decode';
import { ref, onMounted } from 'vue';

const userId = ref(null);

onMounted(() => {
  const user = localStorage.getItem('user');

console.log
});

</script>

<style>

</style>
