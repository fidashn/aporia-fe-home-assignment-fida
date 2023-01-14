<script setup lang="ts">
</script>

<template>
<div class="single-pokemon-body">
    <h2 class="single-pokemon-header">Pokemon Name</h2>
       <img src="" alt="" class="single-pokemon-img">
       <h3>Discription:</h3>
       <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Architecto tenetur eos iusto sequi vel dolores, repudiandae magnam esse tempora. Ullam recusandae commodi doloribus, voluptates vitae tempore consequuntur numquam natus qui!</p>

       <div class="type-ref">
       <h4>type1</h4>
       <h4>type2</h4>
  </div>
</div>
</template>

<style>
.single-pokemon-body{
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 80vw;
  height: 100vh;
  border: 2px rgb(170, 126, 236) solid;
  border-radius: 15px;
  margin: 20px 0 20px 0;
  padding:  0 40px 0 40px ;
}

.single-pokemon-header{
  display: flex;
  align-self: center;
  border: 2px orangered solid;
}

.single-pokemon-img{
  height: 50vh;
  border: 2px rgb(218, 215, 65) solid;
}
.type-ref{
  display: flex;
  justify-content: left;
  gap: 3vw;
  width: 10vw;
  border: 2px rgb(65, 218, 167) solid;
  padding: 20px 0 20px 0;
}
</style>
