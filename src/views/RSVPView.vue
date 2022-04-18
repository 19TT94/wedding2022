<script setup lang="ts">
import Form from "@/components/Form.vue";
</script>

<template>
  <main class="page rsvp">
    <section class="rsvp-form">
      <div class="rsvp-form-border">
        <img class="stamp" src="@/assets/images/stamp.png" />
        <article class="rsvp-form-col">
          <h1 class="title">Celebrate with&nbsp;us!</h1>
        </article>
        <article class="rsvp-form-col">
          <Form />
        </article>
      </div>
    </section>
  </main>
</template>

<style lang="scss">
@import "@/assets/style/all.scss";

.rsvp {
  position: relative;
  width: 100%;
  height: 100%;
  padding: calc($nav + $pad * 2) $pad * 2 $pad * 2 $pad * 2;
}

.rsvp-form {
  width: 100%;
  height: 100%;
  background: $gray;
  padding: $pad;
  box-shadow: $shadow;
  max-width: $bp-4;
  margin: 0 auto;

  &-border {
    @include flex(row, wrap, left, left);
    position: relative;
    width: 100%;
    height: 100%;
    padding: $pad;
    border: 2px solid $primary;
  }

  &-col {
    width: 50%;
    align-self: center;
    justify-self: center;
    text-align: center;

    &:last-child {
      border-left: 2px solid $primary;
    }
  }
}

.stamp {
  position: absolute;
  top: 0;
  right: 0;
  width: 140px;
  padding: $pad;
}

.title {
  font-style: italic;
}
</style>
