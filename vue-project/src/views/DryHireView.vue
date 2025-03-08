<script>

import Booking from "@/components/booking.vue";

export default {
  components: {Booking},
  data() {
    return {
      //Variables in syntax: "var: value"
    }
  },
  methods: {
    //methods
  }
}


</script>

<template>
  <div>
    <h1>Dry Hire</h1>
    <p>Katie is renting out audio equipment for dry hire purposes.</p>
    <p>You can calculate prices down below.</p>
  </div>
  <div class="booking">
    <booking bookingType="dryhire"></booking>
  </div>
</template>

<style scoped>

</style>