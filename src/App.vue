<template>
  <div>
    <Beverage 
      :isIced="currentTemp === 'Cold'" 
      :selectedSyrup="selectedSyrup"  
      :selectedCreamer="selectedCreamer" 
      :selectedBase="selectedBase" />
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
          <template v-for="base in bases" :key="base.id">
            <label>
              <input 
                type="radio" 
                name="base" 
                :value="base.id" 
                v-model="beverageStore.selectedBase" 
              />
              {{ base.name }}
            </label>
          </template>
        </section>

        <section class="option-row">
          <template v-for="cream in creamers" :key="cream.id">
            <label>
              <input 
                type="radio" 
                name="creamer" 
                :value="cream.id" 
                v-model="beverageStore.selectedCreamer" 
              />
              {{ cream.name }}
            </label>
          </template>
        </section>

        <section class="option-row">
          <template v-for="syrup in syrups" :key="syrup.id">
            <label>
              <input 
                type="radio" 
                name="syrup"
                :value="syrup.id" 
                v-model="beverageStore.selectedSyrup" 
              />
              {{ syrup.name }}
            </label>
          </template>
        </section>

      </li>
    </ul>
    <input type="text" placeholder="Beverage Name" />
    <button>🍺 Make Beverage</button>
  </div>
  <div id="beverage-container" style="margin-top: 20px"></div>
</template>

<script setup lang="ts">
import Beverage from "./components/Beverage.vue";
import { useBeverageStore } from "./stores/beverageStore";
const beverageStore = useBeverageStore();
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
