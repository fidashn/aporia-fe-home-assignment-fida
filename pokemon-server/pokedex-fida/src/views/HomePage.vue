<script setup lang="ts">
import {ref} from 'vue';

const input = ref('') ;
   function myVal (){
    console.log(input.value)
   }
 const fontWeight = ref('textBold')
</script>

<template>
 <div class="homePage-body">
  <div class="side-bar">
    <div class="search-wrapper">
      <input type="text" placeholder="Type Pokemon Name..." class="input" id="userInput" v-model="input" @input="myVal">
      <fa-icon icon="search" class="search-icon" />
    </div>
  </div>
  <div class="drop-down"><div class="drop-down-menu"></div> <p :class="fontWeight">{{input}}</p></div>
 </div>
</template>

<style >
.homePage-body{
  width: 80vw;
  height: 100vh;
  border: 2px rgb(170, 126, 236) solid;
  border-radius: 15px;
  margin: 2vw 0 2vh 0;
}

.side-bar{
  width: 20vw;
  height: 100%;
  border-right: 2px rgb(170, 126, 236) solid;
}

.textBold{
  font-weight: 800;
}

</style>
