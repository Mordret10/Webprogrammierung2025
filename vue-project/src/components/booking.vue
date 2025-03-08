<script>
export default {
  props: ['bookingType'],
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
          ReqType: this.bookingType,
        })
        fetch("/api/booking", {
          method: "post",
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            ReqEmail: this.email,
            ReqName: this.name,
            ReqMessage: this.message,
            ReqType: this.bookingType,
          })
        })
            .then((response) => {
              return response.json();
            })
            .then((json) => {
              this.reqResp = json.msg;
            })
      }
      else
      {
        this.reqResp = "Please fill in all fields.";
      }
    }
  }
}
</script>

<template>
  <div class="booking">
    <h1>Booking</h1>
    <p>Would you like to hire Katie?</p>
    <!--<p>You can book her, either as a musician or as an event technician.</p>-->
    <p>Calculate prices down below.</p>

    <input v-model="email" placeholder="Email Address" />
    <input v-model="name" placeholder="Your Name" />
    <input v-model="message" placeholder="Type your booking here..." />

    <button @click="sendBookingRequest">Send Booking Request</button>
    <p>{{reqResp}}</p>

  </div>

</template>

<style scoped>

</style>