<template>
  <div class="p-14">
    <router-link
      class="flex justify-center text-4xl text-blue-700 font-pokeHollow"
      to="/"
      >Pokemon Picker</router-link
    >
  </div>
  <router-view />
</template>

<style>
@font-face {
  font-family: "Pokemon Solid";
  src: local("Pokemon Solid"),
    url(./fonts/Pokemon%20Solid.ttf) format("truetype");
}

@font-face {
  font-family: "Pokemon Hollow";
  src: local("Pokemon Hollow"),
    url(./fonts/Pokemon%20Hollow.ttf) format("truetype");
}
</style>
