<script setup>
import { defineProps } from "vue";
import { columnsRus } from "../api/services";
defineProps({
  columnsRus: Object,
  data: Array,
});

</script>

<template>
  <table class="text-center overflow-scroll">
    <thead>
      <tr>
        <th v-for="column in columnsRus" :key="column">{{ column }}</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="item in data" :key="item.id">
        <td v-for="(column, i) in columnsRus" :key="i">
          <a :href="`https://www.tbank.ru/invest/bonds/${item[i]}`" v-if="column == 'ISIN'">{{ item[i] }}</a>
          <div v-else>{{ item[i] }}</div>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<style scoped>
table,
tr,
td,
th {
  border: 1px solid #ccc;
  white-space: nowrap;
}
td,
th {
  padding-right: 5px;
  padding-left: 5px;
}
</style>
