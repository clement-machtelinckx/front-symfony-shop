<template>
  <div>
    <h1>User profile</h1>
  </div>
</template>
  
<script setup lang="ts">
  async function getUser() {
    const token = localStorage.getItem('token');

    if (!token) {
      navigateTo('/user/connexion')
      return;
    }

    try {
      const response = await fetch('https://localhost:8000/api/users/me', {
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

</script>
  