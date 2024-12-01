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

const filters = ref("yearProfit");

</script>
<template>
    <div class="">
        <form class="max-w-sm mx-auto pb-5">
            <label
                for="sort"
                class="block mb-2 text-sm font-medium text-gray-90"
                >{{ title }}</label
            >
            <select
                v-model="filters"
                id="sort"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-sky-500 focus:border-sky-500 block w-full p-2.5"
            >
                <option
                    v-for="(item, i) in options"
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
