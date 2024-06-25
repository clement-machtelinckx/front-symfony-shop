<template>
    <div>
      <h1>user profil</h1>
      <form>
        <label for="firstname">FirstName:</label>
        <input type="text" id="firstname">
        <br>
        <label for="lastname">Password:</label>
        <input type="text" id="lastname">
        <br>
        <br>
        <label for="phone">Phone:</label>
        <input type="number" id="phone">
        <br>
        <br>
        <label for="country">Contry:</label>
        <input type="text" id="country">
        <br>
        <button type="submit">Send</button>
      </form>
      <div>
          {{ user.value.email }}
      </div>

    </div>
</template>
  
<script setup lang="ts">
import { ref, onMounted } from 'vue';

const user = ref({});
  async function getUser() {
    const token = localStorage.getItem('token');

    if (!token) {
      navigateTo('/user/connexion')
      return;
    }
  

    try {
      const response = await fetch('https://localhost:8000/api/users/1', {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });

      if (response.ok) {
        const user = await response.json();
        console.log(user);
        // Faites quelque chose avec les informations de l'utilisateur, comme afficher son nom sur la page de profil
      } else {
        navigateTo('/user/connexion')
      }
    } catch (e) {
      // Gérer les erreurs réseau ou autres erreurs
    }
  }
  onMounted(() => {
  getUser();
});

</script>
  