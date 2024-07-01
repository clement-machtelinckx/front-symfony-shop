<template>
  <div>
    <h1>User Profile</h1>
    <form v-if="user">
      <label for="firstname">FirstName:</label>
      <input type="text" id="firstname" v-model="user.firstName">
      <br>
      <label for="lastname">LastName:</label>
      <input type="text" id="lastname" v-model="user.lastName">
      <br>
      <br>
      <label for="phone">Phone:</label>
      <input type="number" id="phone" v-model="user.phone">
      <br>
      <br>
      <label for="country">Country:</label>
      <input type="text" id="country" v-model="user.country">
      <br>
      <button type="submit" @click.prevent="updateUser">Save</button>
    </form>
    <p v-else>Loading...</p>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { useRoute, useRouter } from 'vue-router';

const route = useRoute();
const router = useRouter();

const user = ref({});


async function check_user() {
  try {
    const token = localStorage.getItem('token');
    if (!token) {
      console.log('Aucun jeton trouvé');
      return;
    }

    const response = await fetch('https://localhost:8000/api/users', {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    });

    if (response.ok) {
      const data = await response.json();
      console.log(data);
    } else {
      console.log('Réponse du serveur avec un statut d\'erreur');
    }
  } catch (error) {
    console.log('Erreur réseau :', error);
  }
}
check_user()


async function getUser() {
  const token = localStorage.getItem('token');

  if (!token) {
    router.push('/user/connexion');
    return;
  }

  try {
    const response = await fetch(`https://localhost:8000/api/users/${route.params.id}`, {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    });

    if (response.ok) {
      const data = await response.json();
      user.value = data;
      console.log(user.value);
    } else if (response.status === 403) {
      router.push('/user/connexion');
    } else {
      router.push('/404');
    }
  } catch (e) {
    // Gérer les erreurs réseau ou autres erreurs
  }
}



async function updateUser() {
  const token = localStorage.getItem('token');

  try {
    const response = await fetch(`https://localhost:8000/api/users/${route.params.id}`, {
      method: 'PATCH',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/merge-patch+json'
      },
      body: JSON.stringify(user.value)
    });

    if (response.ok) {
      console.log('User updated successfully');
    } else {
      console.log('Error updating user');
    }
  } catch (e) {
    // Gérer les erreurs réseau ou autres erreurs
  }
}

onMounted(() => {
getUser();

});
</script>
