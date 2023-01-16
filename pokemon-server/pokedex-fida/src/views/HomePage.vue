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
  
  <div class="drop-down"><div class="drop-down-menu"></div> <p :class="fontWeight">{{input}}</p></div>
  <ul class="list">
        <li><input type="checkbox" /> Type1</li>
        <li><input type="checkbox" /> Type2</li>
        <li><input type="checkbox" /> Type3</li>
      </ul>
    
  </div>
  <div class="card">
        <div class="name">fff</div>          
          <div class="image"> </div>   
          <div class="description">Lorem ipsum dolor sit amet consectetur adipisicing elit. In, illum?</div>  
        
        <div class="types">
          <ul>
            <li><input type="checkbox" /> Type1</li>
            <li><input type="checkbox" /> Type2</li>
          </ul>
      </div>         
        
       </div>
    </div>
 

</template>

<style >

.card{
  border: 2px rgb(170, 126, 236) solid;
  height: 200px;
  width: 300px;
  margin: 20px;
}
.homePage-body{
  display: flex;
  width: 80vw;
  height: 100vh;
  /* border: 2px rgb(170, 126, 236) solid; */
  border: 2px red solid;
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

.list{
  list-style:none;
  margin-top: 20vh;
}

.search-wrapper{
  display: flex;
  justify-content: space-around;
  align-items: flex-end;
  gap:10px;
  padding-top: 1vw;
  /* border: 2px rgb(170, 126, 236) solid; */
  border-radius: 15px;
  height: 10vh;
}

.input{
  width:15vw;
  height: 5vh;
  border: transparent;
  border-bottom: 2px rgb(170, 126, 236) solid;
  /* border-radius: 10px; */
  position: relative;
  bottom: 0;
}
.search-icon{
 color: rgb(170, 126, 236);
 height: 25px;
}

.drop-down-menu{
  width: 18vw;
  height: 20vh;
  /* background-color: rgb(215, 250, 235); */
  position: absolute;
  border: 2px rgb(170, 126, 236) solid;
  border-radius: 15px;
  text-align: center;
}

</style>
