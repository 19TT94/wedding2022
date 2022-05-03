<script setup lang="ts">
import Form from "@/components/Form.vue";
</script>

<template>
  <main class="page rsvp">
    <p class="notice">
      Please note, we want everyone to feel comfortable at our celebration. We
      would prefer that all guests be fully vaccinated or wear a mask. Please do
      not attend if you are starting to show symptoms before the wedding.
    </p>
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
  padding: calc($nav + $pad * 2) $pad * 2 $pad * 2 $pad * 2;
}

.notice {
  padding-bottom: $pad;
  text-align: center;
}

.rsvp-form {
  width: 100%;
  height: calc(100% - $pad * 3);
  background: $gray;
  box-shadow: $shadow;
  max-width: $bp-4;
  margin: 0 auto;
  padding: $pad;

  &-border {
    @include flex(row, wrap, left, left);
    position: relative;
    width: 100%;
    height: 100%;
    padding: $pad;
    border: 2px solid $primary;
    min-height: 600px;
  }

  &-col {
    width: 100%;
    @include flex(row, wrap, center, center);

    @include bp(2) {
      width: 50%;
      min-height: 400px;
    }

    &:last-child {
      border-top: 2px solid $primary;

      @include bp(2) {
        border-top: 0;
        border-left: 2px solid $primary;
      }
    }
  }
}

.stamp {
  position: absolute;
  top: 0;
  right: 0;
  padding: $pad;
  width: 100px;

  @include bp(2) {
    width: 140px;
  }
}

.title {
  font-style: italic;
  margin-top: $pad * 3;

  @include bp(2) {
    margin-top: 0;
  }
}
</style>
