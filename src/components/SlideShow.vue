<template>
  <section class="wrapper" :class="{ loading: !setupFinished }">
    <ul class="slider">
      <li
        class="slide"
        v-for="(item, index) in slides"
        :key="`x-${index}`"
        :class="[`slide-${index}`, { active: currentIndex === index }]"
      >
        <div
          class="content"
          :style="`background-image: url(${getImage(index)})`"
        ></div>
      </li>
    </ul>

    <!-- optional stuff -->
    <div class="button backward" v-if="navigation">
      <button class="next" @click="backward">←</button>
    </div>

    <div class="button forward" v-if="navigation">
      <button class="next" @click="forward">→</button>
    </div>

    <div class="pagination" v-if="dots">
      <ul class="item-list">
        <li
          class="item"
          v-for="(item, index) in slides"
          :key="`y-${index}`"
          :class="[`slide-${index}`, { active: currentIndex === index }]"
        >
          <button @click="setItem(index)">
            <span v-if="dotText">
              {{ item }}
            </span>
            <span else> &times; </span>
          </button>
        </li>
      </ul>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  mounted() {
    this.initialize();
  },
  data() {
    return {
      currentIndex: 0,
      slides: 6,
      navigation: true,
      dots: true,
      dotText: false,
      setupFinished: false
    };
  },
  computed: {
    itemsLength(): number {
      return this.slides - 1;
    },
    previousIndex(): number {
      return this.currentIndex - 1 < 0
        ? this.itemsLength
        : this.currentIndex - 1;
    },
    nextIndex(): number {
      return this.currentIndex + 1 > this.itemsLength
        ? 0
        : this.currentIndex + 1;
    },
    visualIndex(): number {
      return this.currentIndex + 1;
    },
    visualTotal(): number {
      return this.itemsLength + 1;
    }
  },
  methods: {
    initialize(): void {
      this.currentIndex = 0;
      this.setupFinished = true;
      this.auto();
    },
    auto(): void {
      setInterval(() => {
        this.forward();
      }, 3000);
    },
    setItem(index: number): void {
      this.currentIndex = index;
    },
    forward(): void {
      this.currentIndex = this.nextIndex;
    },
    backward(): void {
      this.currentIndex = this.previousIndex;
    },
    getImage(index: number): string {
      return new URL(
        `/src/assets/images/slide${index + 1}.jpg`,
        import.meta.url
      ).href;
    }
  }
});
</script>

<style lang="scss" scoped>
@import "@/assets/style/all.scss";

.wrapper {
  position: relative;
  width: 100%;
  height: 100%;

  .slide {
    @include absolute-cover();
    @include flex(column, nowrap, center, center);
    pointer-events: none;
    opacity: 0;
    transition: 0.5s ease;

    .content {
      @include flex(column, nowrap, center, center);
      opacity: 0;
      transform: translate(0, 10px);
      transition: 0.5s;
      margin: 0 auto;
      width: 100%;
      height: 100%;
      background-position: center;
      background-size: cover;
    }

    &.active {
      opacity: 1;
      z-index: $base;
      pointer-events: initial;

      .content {
        opacity: 1;
        transition-delay: 0.5s;
        transform: translate(0, 0);
      }
    }
  }
  .pagination {
    z-index: $base;

    span {
      padding: $pad;
      text-shadow: 5px 5px 5px rgba(0, 0, 0, 0.8);
      @include bold();
    }
  }
  .button,
  .menu {
    opacity: 1;
    transition: opacity 2s;
    transition-delay: 1s;
  }
  .button {
    position: absolute;
    top: 50%;
    border: 0;
    transform: translate(0, -50%);
    .next {
      color: $primary;
      padding: 1.5rem 1rem;
      text-shadow: 5px 5px 5px rgba(0, 0, 0, 0.8);
      @include bp(1) {
        font-size: 2rem;
      }
    }
    &.forward {
      right: 0;
      padding: 0;
      display: none;
      @include bp(1) {
        display: block;
      }
    }
    &.backward {
      left: 0;
      padding: 0;
      display: none;
      @include bp(1) {
        display: block;
      }
    }
  }
  .pagination {
    position: absolute;
    bottom: 0;
    width: 100%;

    .item-list {
      margin: 0;
      padding: 0;
      list-style: none;
      display: flex;
      justify-content: center;
    }
    .item {
      display: block;
      button {
        color: $white;
      }
      &.active {
        button {
          color: $primary;
        }
      }
    }
  }
  &.loading {
    .button,
    .menu {
      opacity: 0;
      transition: 2s;
    }
  }
}
.swipe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
</style>
