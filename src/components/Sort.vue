<script setup>
import { ref, defineProps } from "vue";

defineProps({
  sortList: Object,
});

const filters = ref("yearProfit");
</script>
<template>
  <div>
    <form class="max-w-sm mx-auto pb-5">
      <label for="sort" class="block mb-2 text-sm font-medium text-gray-90">{{
        sortList.title
      }}</label>
      <select
        @change="$emit('changeSort', filters)"
        v-model="filters"
        id="sort"
        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-sky-500 focus:border-sky-500 block w-full p-2.5"
      >
        <option
          v-for="(item, i) in sortList.options"
          :key="i"
          :value="i"
          :selected="i == 'yearProfit'"
        >
          {{ item }}
        </option>
      </select>
    </form>
    <div class="text-center text-3xl font-medium m-5">{{ filters }}</div>
  </div>
</template>
