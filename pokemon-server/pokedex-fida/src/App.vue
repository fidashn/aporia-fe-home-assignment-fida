<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";

function currentDayAndTime() {
  const current = new Date();
  const dayOfTheWeek = `${current.toLocaleString('en-us', {weekday:'long'})}`
  const exactTime = `${current.getHours()}:${current.getMinutes()}:${current.getSeconds()}`
  return(dayOfTheWeek + ' '  + exactTime + ' ') ;
}


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
        <RouterLink to="/single-pokemon">Single Pokemon</RouterLink>
        {{ currentDayAndTime() }}
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<style scoped>
.app-wrapper{
display: flex;
flex-direction: column;
height: 100vh;
width: 100vw;
}
</style>
