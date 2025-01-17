<template>
    <div class="w-full h-screen flex justify-center items-center">
      <form @submit.prevent="handleLogin">
        <div>
          <label>Email</label>
          <input v-model="email" type="email" />
        </div>
        <div>
          <label>Password</label>
          <input v-model="password" type="password" />
        </div>
        <button type="submit" :disabled="loading">Login</button>
      </form>
  
      <div v-if="errors">
        <p v-for="(err, i) in errors" :key="i" class="text-red-500">
          {{ err }}
        </p>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  import { useAuth } from '../composables/useAuth'
  
  const { login, errors, loading } = useAuth()
  
  const email = ref('')
  const password = ref('')
  
  async function handleLogin() {
    try {
      await login(email.value, password.value)
    } catch (error) {
    }
  }
  </script>
  