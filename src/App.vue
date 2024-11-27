<script setup>
import Header from "./components/Header.vue";
import Table from "./components/Table.vue";

import { onMounted } from "vue";
import { getBonds } from "./api/api";
import { RouterView } from "vue-router";

onMounted(async () => {
    console.log(await getBonds());
});
</script>

<template>
    <Header />
    <Table />
    <div class="text-3xl text-center">
        <RouterView />
    </div>
</template>
