<template>
    <div class="flex items-center w-full height-32">
        <div>
            Logo
        </div>
        <RouterLink :to="{ name: 'home' }">
            Strona główna
        </RouterLink>
        <RouterLink :to="{ name: 'login' }" class="ml-auto">
            Login
        </RouterLink>
    </div>
</template>

<script setup>

</script>