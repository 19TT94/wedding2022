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

html {
  position: relative;
  overflow-x: hidden;
}

body {
  position: relative;
  background: $background;
  background-image: url("./assets/texture.png");
  height: 100vh;
  overflow-x: hidden;

  @include bp(2) {
    overflow: hidden;
  }
}

#app {
  position: relative;
  width: 100%;
  height: 100%;
  font-family: "Playfair Display", serif;
}
</style>
