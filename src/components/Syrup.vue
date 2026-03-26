<template>
  <div class="syrup" :style="{ backgroundColor: syrupColor }"></div>
</template>


<script setup lang="ts">
import { computed } from "vue";
import { syrups } from "../stores/beverage"; 

const props = defineProps<{
  selectedSyrup: string;
}>();

const syrupColor = computed(() => {
  const option = syrups.value.find((s) => s.id === props.selectedSyrup);
  return option?.color ?? "#c6c6c6";
});
</script>


<style lang="scss" scoped>
.syrup {
  transform: translateY(400%);
  position: relative;
  width: 100%;
  height: 20%;
  animation: pour-tea 2s 1s forwards;
  z-index: 2;
}
</style>