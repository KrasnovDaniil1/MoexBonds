<script setup>
import Header from "./components/Header.vue";
import Table from "./components/Table.vue";
import Loader from "./components/Loader.vue";

import { onMounted, ref } from "vue";
import { getBonds } from "./api/api";
import { RouterView } from "vue-router";

onMounted(async () => {
    console.log(await getBonds());
});

const loading = ref(false)
</script>

<template>
    <Loader v-if="loading" :loading="loading" />
    <Header />
    <Table />
    <div class="text-3xl text-center">
        <RouterView />
    </div>
</template>
