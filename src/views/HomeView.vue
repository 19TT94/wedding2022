<script setup lang="ts">
import SlideShow from "@/components/SlideShow.vue";
import Welcome from "@/assets/svgs/Welcome.vue";
</script>

<template>
  <main class="home">
    <section class="home-column">
      <Welcome />
    </section>
    <section class="home-column">
      <div class="slider-wrapper">
        <SlideShow ref="slider" />
      </div>
    </section>
  </main>
</template>

<style lang="scss">
@import "@/assets/style/all.scss";

.home {
  @include flex(row, wrap, center, center);
  position: relative;
  width: 100%;
  height: 100%;

  &-column {
    width: 50%;
    height: 100%;
    padding: $pad 0 $pad $pad;

    &:last-child {
      padding-right: $pad;
    }
  }

  .slider-wrapper {
    height: calc(100% - $nav);
    margin-top: $nav;
    border: 2px solid $primary;
    padding: $pad * 2;
  }
}
</style>
