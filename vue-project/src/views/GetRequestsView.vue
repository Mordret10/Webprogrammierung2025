<script>

export default {
  data() {
    return {
      JSON_Object_Bookings: JSON.parse("[{}]"),
      JSON_Object_Contacts: JSON.parse("[{}]"),
      JSON_Name: "",
      JSON_Location: "",
      JSON_Date: "",
      JSON_Act: "",
      JSON_API_Call: "",
      JSON_Index: 0
    }
  },
  mounted() {
    this.getBookings();
    this.getContacts();
  },
  methods: {
    getBookings () {
      fetch('/api/getBookings')
          .then(response => {
            if (!response.ok) {
              throw new Error("HTTP error " + response.status);
            }
            return response.json();
          })
          .then(json => {
            this.JSON_Object_Bookings = json;
          })
          .catch(function () {
            this.dataError = true;
          })

    },
    getContacts () {
      fetch('/api/getContacts')
          .then(response => {
            if (!response.ok) {
              throw new Error("HTTP error " + response.status);
            }
            return response.json();
          })
          .then(json => {
            this.JSON_Object_Contacts = json;
          })
          .catch(function () {
            this.dataError = true;
          })

    }
  }
}


</script>

<template>
  <h1>Contact Requests</h1>
  <div>
    <table>
      <tr>
        <th v-for="(attributeKey) in Object.keys(JSON_Object_Contacts[0])">{{attributeKey}}</th>
      </tr>
      <tr v-for="(contact, index) in JSON_Object_Contacts">
        <td v-for="(attribute) in Object.keys(contact)">{{contact[attribute]}}</td>
      </tr>
    </table>
  </div>
  <h1>Booking Requests</h1>
  <div>
    <table>
      <tr>
        <th v-for="(attributeKey) in Object.keys(JSON_Object_Bookings[0])">{{attributeKey}}</th>
      </tr>
      <tr v-for="(contact, index) in JSON_Object_Bookings">
        <td v-for="(attribute) in Object.keys(contact)">{{contact[attribute]}}</td>
      </tr>
    </table>
  </div>
</template>

<style scoped>

</style>