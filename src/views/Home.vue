<template>
  <div class="home">
    <h3>hello world</h3>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "Home",
  setup(){
    fetch("https://pokeapi.co/api/v2/pokemon?offset=0")
    .then((res)=> res.json())
    .then((data)=> {
      console.log(data)
    } )
  }
};
</script>
