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
  height: 100%;
  width: 100%;
}

body {
  position: relative;
  background: $background;
  background-image: url("./assets/texture.png");
  height: 100%;
  width: 100%;

  &:after {
    content: url("https://drive.google.com/uc?id=1pfsOForvjeWhdV3UjFQ86pVk04PmIB_L")
      url("https://drive.google.com/uc?id=1Jmhgp_2zdmBblZoIytkmi54pVWJUedBw")
      url("https://drive.google.com/uc?id=1zsqD9F-bLVPkcvHaT_zLcmXo2mZCGCD")
      url("https://drive.google.com/uc?id=1s_X5fuipJO3TN5STsMRszH5AXIFCFZzh")
      url("https://drive.google.com/uc?id=1DmyqJxkHDhLalWlg1fTDOlU0RJfFJ5jM")
      url("https://drive.google.com/uc?id=1GBJl6eqLcQM7n4_2XF-_gi5RAVZSIy3j");
    position: absolute;
    top: 0;
    left: 0;
    height: 0;
    overflow: hidden;
    z-index: -1;
  }
}

#app {
  position: relative;
  width: 100%;
  height: 100%;
  font-family: "Playfair Display", serif;
}
</style>
