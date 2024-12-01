<script setup>
import Header from "./components/Header.vue";
import Table from "./components/Table.vue";
import Loader from "./components/Loader.vue";
import Sort from "./components/Sort.vue";

import { onMounted, ref } from "vue";
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
</script>

<template>
    <Header />
    <Loader :loading="loading" />
    <div>
        <Sort :sortList="sortList" />
    </div>
    <Table :columnsRus="columnsRus" :data="data" />
    <div class="text-3xl text-center">
        <RouterView />
    </div>
</template>
