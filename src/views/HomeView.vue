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
    width: 100%;
    height: 50%;

    @include bp(1) {
      height: 100%;
      padding: $pad;
    }

    @include bp(2) {
      width: 50%;
      padding: $pad 0 $pad $pad;
    }

    &:first-child {
      margin-top: $nav;

      @include bp(2) {
        margin-top: 0;
      }
    }

    &:last-child {
      @include bp(2) {
        padding-right: $pad;
      }
    }
  }

  .slider-wrapper {
    position: relative;
    margin: $pad;
    border: 2px solid $primary;
    height: calc(100% - $nav);
    min-height: 300px;
    padding: $pad;

    @include bp(2) {
      margin-top: $nav;
      padding: $pad * 2;
    }
  }
}
</style>
