import { defineStore } from "pinia";
import tempretures from "../data/tempretures.json";
import syrups from "../data/syrups.json";
import creamers from "../data/creamers.json";
import bases from "../data/bases.json";

interface Beverage {
  id: string;
  name: string;
  base: string;
  creamer: string;
  syrup: string;
  temp: string;
}

export const useBeverageStore = defineStore("BeverageStore", {
  state: () => ({
    temps: tempretures,
    currentTemp: tempretures[1],
    syrups: syrups,
    currentSyrup: syrups[1].id,
    creamers: creamers,
    currentCreamer: creamers[1].id,
    bases: bases,
    currentBase: bases[1].id,
    recipes: [] as Beverage[],
  }),

  actions: {
    makeBeverage(beverage: Omit<Beverage, 'id'>) {
      const newRecipe: Beverage = {
        ...beverage,
        id: Date.now().toString(),
      };
      this.recipes.push(newRecipe);
    },
    showBeverage(id: string) {
      const recipe = this.recipes.find(r => r.id === id);
      if (recipe) {
        this.currentBase = recipe.base;
        this.currentCreamer = recipe.creamer;
        this.currentSyrup = recipe.syrup;
        this.currentTemp = recipe.temp;
      }
    },
    
  },
  persist: true,
});
