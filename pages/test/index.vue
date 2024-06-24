<script setup lang="ts">
const { data: articles, error } = await useAsyncData('articles', () => $fetch('https://localhost:8000/api/articless'))

if (error.value) {
  console.error(error.value)
}

const useTruncable = (text: string, maxLength: number) => {
  return text.length > maxLength ? text.substring(0, maxLength) + '...' : text
}
console.log(articles)
</script>

<template>
    <div>
        <h1>article</h1>
        <div>
            <div v-for="article in articles" :key="article.id">
                <h2>{{ article.name }}</h2>
                <h2>{{ article.price }}</h2>

            </div>
            {{ articles }}
        </div>
    </div>
</template>