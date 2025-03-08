<script>
import Booking from "@/components/booking.vue";

export default {
  components: {Booking},
  data() {
    return {
      JSON_Object: JSON.parse("[{}]"),
      email: "",
      name: "",
      message: "",
      reqResp: "",
    }
  },
  methods: {
    sendBookingRequest() {
      if (this.email !== "" && this.name !== "" && this.message !== "")
      {
        this.debugText = JSON.stringify({
          ReqEmail: this.email,
          ReqName: this.name,
          ReqMessage: this.message,
        })
        fetch("/api/musicianReq", {
          method: "post",
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            ReqEmail: this.email,
            ReqName: this.name,
            ReqMessage: this.message,
          })
        })
            .then((response) => {
              this.ReqResp = response;
            });
      }
      else
      {

      }
    }
  }
}
</script>

<template>
  <div class="booking">
    <booking bookingType="musician"></booking>
  </div>

</template>

<style scoped>

</style>