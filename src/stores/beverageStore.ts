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
    currentTemp: tempretures.find(t => t === "Cold") ?? tempretures[0],
    syrups: syrups,
    currentSyrup: syrups.find(s => s.id === "Vanilla")?.id ?? syrups[0].id,
    creamers: creamers,
    currentCreamer: creamers.find(c => c.id === "Cream")?.id ?? creamers[0].id,
    bases: bases,
    currentBase: bases.find(b => b.id === "Green Tea")?.id ?? bases[0].id,
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
