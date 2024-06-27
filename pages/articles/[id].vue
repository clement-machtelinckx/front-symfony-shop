<template>
    <div>
      <h1>Test</h1>
      <div v-if="article">
        <div>
          <h2>{{ article.name }}</h2>
          <h2>{{ article.price }}</h2>
          <p>{{ article.weight }}</p>
          <p>{{ article.price }}</p>
          <p>{{ article.id }}</p>

        </div>
      </div>
      <p v-else>Loading...</p>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref } from 'vue'
  const runtimeConfig = useRuntimeConfig()
  
  const route = useRoute()
  
  async function fetchData() {
    const response = await fetch(`https://localhost:8000/api/articles/${route.params.id}`)
    const data = await response.json()
    article.value = data
  }
  
  const article = ref(null)
  
  fetchData()
  </script>
  