<script setup>
import { defineProps } from "vue";
import { columnsRus } from "../api/services";
defineProps({
    columnsRus: Object,
    data: Array,
});
</script>

<template>
    <table class="text-center overflow-scroll mx-auto">
        <thead>
            <tr>
                <th v-for="column in columnsRus" :key="column">{{ column }}</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="item in data" :key="item.id">
                <td v-for="(v, k) in columnsRus" :key="k">
                    <!-- <a
                        class="text-sky-500"
                        :href="`https://www.tbank.ru/invest/bonds/${item[k]}`"
                        target="_blank"
                        v-if="k == 'ISIN'"
                        >{{ item[k] }}</a
                    > -->
                    <a
                        class="text-sky-500"
                        :href="`https://www.moex.com/ru/issue.aspx?board=${item.BOARDID}&code=${item[k]}`"
                        target="_blank"
                        v-if="k == 'ISIN'"
                        >{{ item[k] }}</a
                    >
                    <template v-else>{{ item[k] }}</template>
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
