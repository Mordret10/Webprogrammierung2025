<script>

export default {
  data() {
    return {
      JSON_Object: JSON.parse("[{}]"),
      JSON_Name: "",
      JSON_Location: "",
      JSON_Date: "",
      JSON_Act: "",
      JSON_API_Call: "",
      JSON_Index: 0
    }
  },
  methods: {
    readJson () {
      // http://localhost:8080
      console.log("Reading");
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
  <!--<p>{{JSON_Object}}</p>-->
  <div>
    <button v-for="(gig,index) in JSON_Object" @click="JSON_Index=index">{{gig.name}}</button>
  </div>
  <iframe :src="JSON_Object[JSON_Index].APICall" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
</template>

<style scoped>

</style>