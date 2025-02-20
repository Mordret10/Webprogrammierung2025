<script>

export default {
  data() {
    return {
      JSON_Object: "[{}]",
      JSON_Name: "",
      JSON_Location: "",
      JSON_Date: "",
      JSON_Act: "",
      JSON_API_Call: ""
    }
  },
  methods: {
    readJson () {
      // http://localhost:8080
      fetch('/api/locations')
          .then(response => {
            if (!response.ok) {
              throw new Error("HTTP error " + response.status);
            }
            return response.json();
          })
          .then(json => {
            this.JSON_Object = json;
          })
          .catch(function () {
            this.dataError = true;
          })

    }
  }
}


</script>

<template>
  <h1>Gigs</h1>
  <button @click="readJson">READ</button>
  <p>{{JSON_Object[0]}}</p>
  <iframe src="" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
</template>

<style scoped>

</style>