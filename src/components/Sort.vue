<script setup>
import { ref } from "vue";

let title = "Сортировать по:";
let options = {
  yearProfit: "Годовой доходности", // default
  expireYears: "Дате погашения",
  COUPONPERIOD: "Периоду купонов",
  COUPONVALUE: "Величине купона",
  couponCount: "Количеству купонов",
};

const filters = ref();

const onChangeSelect = (event) => {
  filters.value = event.target.value;
  console.log(filters.value);
};
</script>
<template>
  <div class="">
    <form class="max-w-sm mx-auto pb-5">
      <label
        for="sort"
        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >Select an option</label
      >
      <select
        @change="onChangeSelect"
        id="sort"
        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      >
        <option selected disabled>{{ title }}</option>
        <option v-for="(item, i) in options" :key="i" :value="i">
          {{ item }}
        </option>
      </select>
    </form>
    <div class="text-center text-3xl font-medium m-5">{{ filters }}</div>
  </div>
</template>
