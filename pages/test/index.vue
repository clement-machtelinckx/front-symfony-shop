<script setup lang="ts">
import { onMounted } from 'vue'

const { data: article, error } = await useAsyncData('articles', () => $fetch('https://localhost:8000/api/articles?page=1'))

if (error.value) {
  console.error(error.value)
}


onMounted(() => {
  console.log(`the component is now mounted.`)
  console.log(article)
})

console.log(article)
</script>

<template>
  <div>
    <h1>Test</h1>
    <div v-for="a in article">
      <h2>{{ a.name }}</h2>
    </div>
    <p>{{ article }}</p>
    <p>wtf</p>
  </div>
</template>