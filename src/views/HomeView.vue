<template>
    <main>
        {{ user }}
    </main>
</template>

<script setup>
import { useAuth } from '@/composables/useAuth';

const { user } = useAuth();
</script>
