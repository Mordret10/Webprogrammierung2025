<script>
export default {
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
    sendContactRequest() {
      if (this.email !== "" && this.name !== "" && this.message !== "")
      {
        this.debugText = JSON.stringify({
          ReqEmail: this.email,
          ReqName: this.name,
          ReqMessage: this.message,
          ReqType: this.bookingType,
        })
        fetch("/api/contactReq", {
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
  <div class="contact">
    <h1>Contact</h1>
    <p>Want to get in touch with Katie?</p>
    <p>Use our contact form down below or find her on social media.</p>
    <a href="https://de.linkedin.com/in/katja-sophie-vogel-3aab99248">LinkedIn</a>
    <a href="https://www.instagram.com/katiebird.music/?hl=en">Instagram</a>
    <a href="https://en-gb.facebook.com/katie.bird.7146557">Facebook</a>
    <a href="https://www.blaske-band.de">Blaske Homepage</a>
  </div>
  <div class="contact">
    <input v-model="email" placeholder="Email Address" />
    <input v-model="name" placeholder="Your Name" />
    <input v-model="message" placeholder="Type your message here..." />

    <button @click="sendContactRequest">Contact us</button>
    <p>{{reqResp}}</p>
  </div>

</template>

<style scoped>

</style>