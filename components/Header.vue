<template>
    <header class="py-4">
      <nav class="flex justify-between items-center bg-stone-300 min-h-20">
        <ul class="flex gap-4">
          <!-- Vos liens de navigation -->
          <li><NuxtLink to="/">Home</NuxtLink></li>
          <li><NuxtLink to="/user/connexion">Connexion</NuxtLink></li>
          <li><NuxtLink to="/user/1">Profile</NuxtLink></li>
          <li><NuxtLink to="/test">test</NuxtLink></li>

        </ul>
      </nav>
    </header>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  </script>

  <style>

</style>