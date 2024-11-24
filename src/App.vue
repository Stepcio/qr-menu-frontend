<template>
    <div v-if="authenticated">
        Hello {{ user.name }}!
    </div>

    <form v-on:submit.prevent="login(form)">
        <input type="email" v-model="form.email" />
        <input type="password" v-model="form.password" />
        <button type="submit">Log in</button>
    </form>
</template>

<script setup>
import { reactive } from 'vue'
import { useAuth } from '@/composables/auth'

const { authenticated, user, login } = useAuth()

const form = reactive({
    email: '',
    password: '',
})
</script>