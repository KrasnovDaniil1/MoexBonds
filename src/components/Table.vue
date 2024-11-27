<script setup>
const columnsRus = {
  id: "Код",
  name: "",
  startData: "Открытие",
  endData: "Закрытие",
  price: "Цена",
  coupon: "Купон",
  couponPeriod: "Выплат в год",
  couponDate: "Ближайший купон",
  value: "Ближайший купон",
  board: "Ближайший купон",
};

const data = [
  {
    id: "1",
    src: "http",
    info: "test",
    name: "name",
    startData: "startData",
    endData: "endData",
    price: "price",
    coupon: "coupon",
    couponPeriod: "couponPeriod",
    couponDate: "couponDate",
    value: "value",
    board: "board",
  },
  {
    id: "2",
    src: "http",
    info: "test",
    name: "name",
    startData: "startData",
    endData: "endData",
    price: "price",
    coupon: "coupon",
    couponPeriod: "couponPeriod",
    couponDate: "couponDate",
    value: "value",
    board: "board",
  },
];
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
        <td v-for="(column, i) in columnsRus" :key="i">{{ item[i] }}</td>
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
