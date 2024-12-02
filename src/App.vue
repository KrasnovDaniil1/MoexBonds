<script setup>
import Header from "./components/Header.vue";
import Table from "./components/Table.vue";
import Loader from "./components/Loader.vue";
import Sort from "./components/Sort.vue";
import Search from "./components/Search.vue";

import { onMounted, ref, watch } from "vue";
import { getBonds } from "./api/api";
import { RouterView } from "vue-router";
import { columnsRus } from "./api/services";
import { sortList, SortNum, sortByUpDown } from "./api/sort";

const data = ref();
const loading = ref(true);
const sortKey = ref(sortList.default);
const sortUpDown = ref(sortByUpDown.default);

function SortBonds() {
  data.value = SortNum(data.value, sortKey.value, sortUpDown.value);
}

onMounted(async () => {
  data.value = await getBonds();
  SortBonds();
  loading.value = false;
});

function changeSortUpDown(v) {
  sortUpDown.value = !sortUpDown.value;
  SortBonds();
}

function changeSortKey(v) {
  sortKey.value = v;
  SortBonds();
}
</script>

<template>
  <Header />
  <Loader :loading="loading" />
  <div>
    <Sort
      :sortList="sortList"
      :sortByUpDown="sortByUpDown"
      @changeSort="(n) => changeSortKey(n)"
      @changeByUpDown="() => changeSortUpDown()"
    />
    <Search />
  </div>
  <Table :columnsRus="columnsRus" :data="data" />
  <div class="text-3xl text-center">
    <RouterView />
  </div>
</template>
