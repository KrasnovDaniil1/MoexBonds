<script setup>
import Header from "./components/Header.vue";
import Table from "./components/Table.vue";
import Loader from "./components/Loader.vue";

import { onMounted, ref } from "vue";
import { getBonds } from "./api/api";
import { RouterView } from "vue-router";
import { columnsRus } from "./api/services";

onMounted(async () => {
    data.value = await getBonds();
    loading.value = false;
    console.log(data.value);
});

const loading = ref(true);
let data = ref();
</script>

<template>
    <Header />
    <Loader :loading="loading" />
    <Table :columnsRus="columnsRus" :data="data" />
    <div class="text-3xl text-center">
        <RouterView />
    </div>
</template>
