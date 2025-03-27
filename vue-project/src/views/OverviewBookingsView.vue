<script setup>

import {RouterLink} from "vue-router";
</script>

<template>
  <h1>Booking Overview</h1>
  <p>Select your type of booking:</p>
  <nav>
    <RouterLink to="/dryhire">Dry hire Equipment</RouterLink>
    <RouterLink to="/musician">Hire as musician</RouterLink>
    <RouterLink to="/technician">Hire as technician</RouterLink>
  </nav>
</template>

<style>

</style>