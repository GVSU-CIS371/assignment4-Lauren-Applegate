<template>
  <div>
    <Beverage 
      :isIced="beverageStore.currentTemp === 'Cold'" 
      :selectedSyrup="beverageStore.currentSyrup"  
      :selectedCreamer="beverageStore.currentCreamer" 
      :selectedBase="beverageStore.currentBase" />
    <ul>
      <li>

        <section class="option-row">
          <template v-for="temp in beverageStore.temps" :key="temp">
            <label>
              <input
                type="radio"
                name="temperature"
                :id="`r${temp}`"
                :value="temp"
                v-model="beverageStore.currentTemp"
              />
              {{ temp }}
            </label>
          </template>
        </section>

        <section class="option-row">
          <template v-for="base in beverageStore.bases" :key="base.id">
            <label>
              <input 
                type="radio" 
                name="base" 
                :value="base.id" 
                v-model="beverageStore.currentBase" 
              />
              {{ base.name }}
            </label>
          </template>
        </section>

        <section class="option-row">
          <template v-for="cream in beverageStore.creamers" :key="cream.id">
            <label>
              <input 
                type="radio" 
                name="creamer" 
                :value="cream.id" 
                v-model="beverageStore.currentCreamer" 
              />
              {{ cream.name }}
            </label>
          </template>
        </section>

        <section class="option-row">
          <template v-for="syrup in beverageStore.syrups" :key="syrup.id">
            <label>
              <input 
                type="radio" 
                name="syrup"
                :value="syrup.id" 
                v-model="beverageStore.currentSyrup" 
              />
              {{ syrup.name }}
            </label>
          </template>
        </section>

      </li>
    </ul>
    
      <input type="text" v-model="beverageName" placeholder="Beverage Name" />
      <button @click="makeBeverage">🍺 Make Beverage</button>
    
  </div>

  <div id="beverage-container" style="margin-top: 20px">
    <template v-for="recipe in beverageStore.recipes" :key="recipe.id">
      <label>
        <input 
          type="radio" 
          name="recipe"
          :value="recipe.id" 
          v-model="selectedRecipeId"
          @change="beverageStore.showBeverage(recipe.id)"
        />
        {{ recipe.name }}
      </label>
    </template>
    
  </div>
  
</template>

<script setup lang="ts">
import Beverage from "./components/Beverage.vue";
import { useBeverageStore } from "./stores/beverageStore";


import { ref } from "vue";

const beverageStore = useBeverageStore();
const beverageName = ref("");
const selectedRecipeId = ref("");

const makeBeverage = () => {
  beverageStore.makeBeverage({
    name: beverageName.value,
    base: beverageStore.currentBase,
    creamer: beverageStore.currentCreamer,
    syrup: beverageStore.currentSyrup,
    temp: beverageStore.currentTemp,
  });
  beverageName.value = ""; 

};
</script>

<style lang="scss">
body,
html {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  background-color: #6e4228;
  background: linear-gradient(to bottom, #6e4228 0%, #956f5a 100%);
}
ul {
  list-style: none;
}

</style>
