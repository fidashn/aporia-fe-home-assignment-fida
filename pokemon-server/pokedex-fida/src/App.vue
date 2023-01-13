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
     
    <div class="wrapper">
      <nav>
     <img
       alt="pokedex-logo"
       class="logo"
       src="@/assets/Pokédex-logo.png"
       width="150"
       height="100"
     />
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/single-pokemon">Single Pokemon</RouterLink>
        {{ currentDayAndTime() }}
      </nav>
    </div>
 
  <RouterView />
</template>

<style scoped>
.app-wrapper{
display: flex;
flex-direction: column;
height: 100vh;
width: 100vw;
}

.wrapper{
  height:15vh ;
}


nav {
  display: flex;
  justify-content:space-around;
  align-items: center;
  width: 80vw;
  font-size: 30px;
  text-align: center;
  border: 2px rgb(170, 126, 236) solid;
  border-radius: 15px;
  margin-top: 2vw;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}
</style>
