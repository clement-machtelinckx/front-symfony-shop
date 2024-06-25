<template>
    <div>
      <h1>Login</h1>
      <form @submit.prevent="login">
        <label for="username">Username:</label>
        <input type="text" id="username" v-model="username" required>
        <br>
        <label for="password">Password:</label>
        <input type="password" id="password" v-model="password" required>
        <br>
        <button type="submit">Login</button>
      </form>
      <p v-if="error">{{ error }}</p>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref } from 'vue'
  
  const username = ref('')
  const password = ref('')
  const error = ref('')
  
  async function login() {
    try {
      const response = await fetch('https://localhost:8000/api/login_check', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username: username.value,
          password: password.value
        })
      })
        if (response.ok) {
            const data = await response.json()
            localStorage.setItem('token', data.token)
            navigateTo('/user')
        } else {
            error.value = 'Username or password incorrect'
        }

  } catch (e) {
    error.value = e.message;
  }
  }
  </script>
  