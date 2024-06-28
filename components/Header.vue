<template>
    <header class="">
      <nav class="">
        <ul class="header">
          <!-- Vos liens de navigation -->
          <li><h2><NuxtLink to="/">Home</NuxtLink></h2></li>
          <li><h2><NuxtLink to="/user/connexion">Connexion</NuxtLink></h2></li>
          <li><h2><NuxtLink to="/user/1">Profile</NuxtLink></h2></li>
          <li><h2><NuxtLink to="/articles">Articles</NuxtLink></h2></li>
          <li><h2><NuxtLink to="/cart">Panier</NuxtLink></h2></li>

        </ul>
      </nav>
    </header>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  </script>

  <style>

</style>