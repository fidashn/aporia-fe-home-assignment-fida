<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <header>
    <img
      alt="pokedex-logo"
      class="logo"
      src="@/assets/Pokédex-logo.png"
      width="150"
      height="100"
    />

    <div class="wrapper">
     <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<style scoped>
</style>
