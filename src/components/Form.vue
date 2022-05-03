<template>
  <div class="netlify-form">
    <div class="form" v-if="!processed">
      <h2>RSVP</h2>
      <form
        id="form"
        name="rsvp"
        method="POST"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        @submit.prevent="handleSubmit()"
      >
        <input type="hidden" name="form-name" value="rsvp" />
        <label for="name"
          >Our venue has a guest limit, so please only indicate those addressed
          on the invition or yourself and a plus one.</label
        >
        <input type="text" placeholder="Name(s)" name="name" v-model="name" />
        <input type="email" placeholder="Email" name="email" v-model="email" />
        <label for="attending" class="inline">
          <span>Attending</span>
          <input type="radio" name="attending" v-model="attending" checked />yes
          <input type="radio" name="attending" v-model="attending" />no
        </label>
        <input type="text" placeholder="Message/Question" v-model="message" />
        <p class="error" v-if="error">Email/Name are required fields</p>
        <button class="button-full submit" type="submit">Send</button>
      </form>
    </div>
    <div class="proccessed" v-else>
      <div class="message">
        <h3 v-if="success">We received your RSVP! See you at the wedding!</h3>
        <h3 v-else>
          Oops your RSVP didn't go through. Please try again or contact us via
          <a
            href="mailto:19tt94@gmail.com"
            style="text-decoration: underline; display: inline-block"
            >email</a
          >.
        </h3>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import type { AxiosRequestConfig } from "axios";
import axios from "axios";

export default defineComponent({
  name: "NetlifyForm",
  data() {
    return {
      name: "",
      email: "",
      attending: 1,
      message: "",
      processed: false,
      success: false,
      error: false
    };
  },
  methods: {
    encode(data: any) {
      return Object.keys(data)
        .map(
          (key) => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`
        )
        .join("&");
    },
    handleSubmit() {
      const axiosConfig: AxiosRequestConfig = {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded"
        }
      };

      if (!this.email || !this.name) {
        this.error = true;
      } else
        axios
          .post(
            "/",
            this.encode({
              "form-name": "rsvp",
              name: this.name,
              email: this.email,
              attending: this.attending,
              message: this.message
            }),
            axiosConfig
          )
          .then(() => {
            this.processed = true;
            this.success = true;
          })
          .catch(() => {
            this.processed = true;
            this.success = false;
          });
    }
  }
});
</script>

<style scoped lang="scss">
@import "@/assets/style/all.scss";

.netlify-form {
  @include flex(row, wrap, center, center);

  .form {
    margin: 10px auto;
    width: 90%;
    height: 100%;

    input {
      width: 100%;
      margin: calc($pad/2) 0;
    }

    button {
      margin: calc($pad/2) 0 0;
    }
  }
  .message {
    max-width: 80%;
    margin: 0 auto;
    color: $primary;
  }

  .inline {
    display: inline-flex;
  }

  .error {
    color: red;
    text-align: center;
    width: 100%;
    @include quiet();
  }
}
</style>
