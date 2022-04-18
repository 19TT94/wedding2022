<script setup lang="ts">
import NavBar from "@/components/NavBar.vue";
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <header>
    <NavBar />
  </header>

  <RouterView />
</template>

<style lang="scss">
@import "@/assets/style/all.scss";

body {
  overflow: hidden;
}

#app {
  background: $background;
  background-image: url("./assets/texture.png");
  margin: 0 auto;
  height: 100vh;
  width: 100vw;
  font-family: "Playfair Display", serif;
}
</style>
