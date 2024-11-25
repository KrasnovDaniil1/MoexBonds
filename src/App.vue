<script setup>
import Header from "./components/Header.vue";
import Table from "./components/Table.vue";

import { onMounted } from "vue";
import { getBonds } from "./api/api";

onMounted(() => {
    console.log("t", getBonds());
});
</script>

<template>
    <Header />
    <Table />
</template>
