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
  mounted() {
    this.readJson();
  },
  methods: {
    readJson () {
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
  <!--<p>{{JSON_Object}}</p>-->
  <div>
    <button v-for="(gig,index) in JSON_Object" @click="JSON_Index=index">{{gig.name}}</button>
  </div>
  <iframe :src="JSON_Object[JSON_Index].APICall" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>

  <div v-if="JSON_Object != null && JSON_Object.length > 0 ">
    <table>
      <tr>
        <th v-for="(attributeKey) in Object.keys(JSON_Object[0])"><p v-if="attributeKey!=='APICall'">{{attributeKey}}</p></th>
      </tr>
      <tr v-for="(gig) in JSON_Object">
        <td v-for="(attribute) in Object.keys(gig)">
          <p v-if="attribute!=='APICall'">{{gig[attribute]}}</p>
          </td>
      </tr>
    </table>
  </div>
</template>

<style scoped>

</style>