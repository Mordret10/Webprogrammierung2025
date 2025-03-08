<script>

import Booking from "@/components/booking.vue";

export default {
  components: {Booking},
  data() {
    return {
      //Variables in syntax: "var: value"
      JSON_Object: JSON.parse("[{}]"),
      checkboxesTicked: [],
      inputValues: [],
      sum: 0,
      presetConfiguration: null
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
    },
    addConfigurationToOrder() {
      let isFirst = true;
      this.calcMaterialPrices();
      this.presetConfiguration = "[";
      this.checkboxesTicked.forEach((currentElement, index) => {
        if(currentElement) {
          if(this.inputValues[index] !== 0 && this.inputValues[index] !== null)
          {
            if(!isFirst)
            {
              this.presetConfiguration += ",";
            }
            this.presetConfiguration += "{" + this.JSON_Object[index].name + ": " + this.inputValues[index] + "}";
            isFirst = false;
          }
        }
      })
      this.presetConfiguration += "]";
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
          <label :for="material.name"> {{material.name}} ({{JSON_Object[index].pricePerDay}}€/d)</label><br>
          <input type="checkbox" v-model="checkboxesTicked[index]" :id="material.name">
          <input v-if="checkboxesTicked[index]" v-model="inputValues[index]" />
        </li>
      </ul>
    </div>
    <div>
      <button @click="calcMaterialPrices">Calculate Material Prices</button>
      <button @click="addConfigurationToOrder">Add current configuration to order</button>
      <p>Your total is: {{sum}}€</p>
    </div>
  </div>
  <div class="booking">
    <booking bookingType="dryhire" :messagePreset="this.presetConfiguration"></booking>
  </div>
</template>

<style scoped>

</style>