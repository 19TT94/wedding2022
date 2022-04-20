<template>
  <nav class="menu">
    <div class="menu-logo">
      <router-link to="/">
        <img
          alt="Amber &amp; Taylor Wedding Logo"
          class="logo"
          src="@/assets/logo.svg"
        />
      </router-link>
    </div>
    <ul class="menu-links">
      <li class="menu-links-link">
        <router-link to="/rsvp">RSVP</router-link>
      </li>
      <li class="menu-links-link">
        <router-link to="/directions"> Details </router-link>
      </li>
      <li class="menu-links-link">
        <a
          href="https://registry.theknot.com/taylor-tobin-amber-crotteau-may-2023-ca/52044411"
          target="_blank"
        >
          Registry
        </a>
      </li>
    </ul>
  </nav>
</template>

<style lang="scss">
@import "@/assets/style/all.scss";

.menu {
  @include flex(row, nowrap, space-between, center);
  width: 100%;
  height: $nav;
  position: absolute;
  top: 0;
  right: 0;
  z-index: z("top");

  &-logo {
    position: relative;
    width: 75px;
    height: 75px;
    padding: $pad;

    img {
      width: 100%;
      height: 100%;
    }
  }

  &-links {
    @include flex(row, nowrap, space-between, center);

    &-link {
      margin: $pad;
    }
  }
}
</style>
