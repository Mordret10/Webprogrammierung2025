<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <!--<img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />-->

    <div class="navigationHeader">
      <img alt="Katja Image" src="/KSV_Portrait.jpg" width="150" height="150" />
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/cv">CV</RouterLink>
        <RouterLink to="/gigs">Gigs</RouterLink>
        <RouterLink to="/gallery">Gallery</RouterLink>
        <RouterLink to="/overviewBookings">Booking Overview</RouterLink>
        <!-- Dry Hire, Musician, Technician -->
        <RouterLink to="/contact">Contact</RouterLink>
        <RouterLink to="/legalinfo">Legal Info</RouterLink>
      </nav>
    </div>
  </header>
  <main>
    <div class="View">
      <RouterView />
    </div>
  </main>

</template>

<style scoped>

header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    position: sticky;
    top:0;
    background: var(--color-background);
    display: flex;
    place-items: center;
    /*padding-right: calc(var(--section-gap) / 2);*/
  }

  div.View {
    width: 1000px;
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    /*place-items: flex-start;*/
    place-items: center;
    justify-content: center;

    flex-wrap: wrap;
  }

  nav {
    text-align: center; /*left*/
    /*margin-left: -1rem;*/
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }

  .navigationHeader {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  img {
    object-fit: contain;
  }

}
</style>
