<script>
export default {
  props: ['bookingType', 'messagePreset'],
  data() {
    return {
      JSON_Object: JSON.parse("[{}]"),
      email: "",
      name: "",
      message: "",
      reqResp: "",
      componentKey: 0
    }
  },
  updated() {
    if(this.messagePreset != null) {
      this.message = this.messagePreset;
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
    <h1>Request</h1>

    <input v-model="email" placeholder="Email Address" />
    <input v-model="name" placeholder="Your Name" />
    <input v-model="message" placeholder="Further Information" />

    <button @click="sendBookingRequest">Send Request</button>
    <p>{{reqResp}}</p>

  </div>

</template>

<style scoped>

</style>