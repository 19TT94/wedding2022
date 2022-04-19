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
        <input type="text" placeholder="Name" name="name" v-model="name" />
        <input type="email" placeholder="Email" name="email" v-model="email" />
        <label for="attending" class="inline">
          <span>Attending</span>
          <input type="radio" name="attending" v-model="attending" checked />yes
          <input type="radio" name="attending" v-model="attending" />no
        </label>
        <label for="plusOne" class="inline">
          <span>Plus&nbsp;one?</span>
          <input type="checkbox" name="plusOne" v-model="plusOne" />
        </label>
        <button class="button-full submit" type="submit">Send</button>
      </form>
    </div>
    <div class="proccessed" v-else>
      <div class="message">
        <h3 v-if="success">
          Your message has been recieved, we look forward to seeing you!
        </h3>
        <h3 v-else>
          There was an error processing you're request. Please try again later
          or contact me via email.
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
      plusOne: true,
      processed: false,
      success: false
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

      axios
        .post(
          "/",
          this.encode({
            "form-name": "rsvp",
            name: this.name,
            email: this.email,
            attending: this.attending,
            plusOne: this.plusOne
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
  display: relative;

  #form {
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: center;
    margin: 10px auto;
    width: 90%;

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
}
</style>
