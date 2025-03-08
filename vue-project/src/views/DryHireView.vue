<script>

import Booking from "@/components/booking.vue";

export default {
  components: {Booking},
  data() {
    return {
      //Variables in syntax: "var: value"
      JSON_Object: JSON.parse("[{}]"),
      JSON_Name: "",
      JSON_Location: "",
      JSON_Date: "",
      JSON_Act: "",
      JSON_API_Call: "",
      JSON_Index: 0,
      checkboxesTicked: [],
      inputValues: [],
      sum: 0
    }
  },
  mounted() {
    this.readJson();
    this.setDefaultValues();
  },
  methods: {
    //methods
    readJson () {
      fetch('/api/materialprices')
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

    },
    setDefaultValues() {
      this.JSON_Object.forEach((currentElement, index) => {
        this.checkboxesTicked[index] = false;
        this.inputValues[index] = 0;
      })
    },
    calcMaterialPrices () {
      this.sum = 0;
      this.checkboxesTicked.forEach((currentElement, index) => {
        if(currentElement) {
          if(isNaN(this.inputValues[index]))
          {
            this.inputValues[index] = 0;
          }
          this.sum += parseInt(this.JSON_Object[index].pricePerDay) * parseInt(this.inputValues[index]);
        }
      })
    }
  }
}


</script>

<template>
  <div>
    <h1>Dry Hire</h1>
    <p>Katie is renting out audio equipment for dry hire purposes.</p>
    <p>You can calculate prices down below.</p>
  </div>
  <div class="calc">
    <h2>Choose materials and calculate prices here</h2>
    <div>
      <ul>
        <li v-for="(material,index) in JSON_Object" @click="JSON_Index=index">
          <label :for="material.name"> {{material.name}}</label><br>
          <input type="checkbox" v-model="checkboxesTicked[index]" :id="material.name">
          <input v-if="checkboxesTicked[index]" v-model="inputValues[index]" />
        </li>
      </ul>
    </div>
    <div>
      <button @click="calcMaterialPrices">Calculate Material Prices</button>
      <p>Your total is: {{sum}}€</p>
      <p>Values {{inputValues}}</p>
      <p>Ticked {{checkboxesTicked}}</p>
      <p v-for="material in JSON_Object" >{{material.pricePerDay}}</p>
    </div>
  </div>
  <div class="booking">
    <booking bookingType="dryhire"></booking>
  </div>
</template>

<style scoped>

</style>