import { ref, computed } from 'vue'
import axios from 'axios'

export function useAuth() {
  const user = ref(null)
  const loading = ref(false)
  const errors = ref(null)

  const isAuthenticated = computed(() => !!user.value)

  async function getCsrfCookie() {
    try {
      await axios.get('/sanctum/csrf-cookie')
    } catch (error) {
      console.error('Unable to get CSRF cookie', error)
      throw error
    }
  }

  async function login({ email, password }) {
    errors.value = null
    loading.value = true

    try {
      await getCsrfCookie()

      await axios.post('/login', {
        email,
        password,
      })

      await fetchUser()
    } catch (error) {
      if (error.response && error.response.data) {
        errors.value = error.response.data.errors || error.response.data.message
      } else {
        errors.value = ['Something went wrong.']
      }
      throw error
    } finally {
      loading.value = false
    }
  }

  async function logout() {
    try {
      await axios.post('/logout')
      user.value = null
    } catch (error) {
      console.error('Logout error:', error)
    }
  }

  async function fetchUser() {
    try {
      const response = await axios.get('/api/user')
      user.value = response.data
    } catch (error) {
      console.error('Unable to fetch user data:', error)
      user.value = null
    }
  }

  return {
    user,
    loading,
    errors,
    isAuthenticated,
    login,
    logout,
    fetchUser,
  }
}
