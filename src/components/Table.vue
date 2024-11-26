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
                <th>Место</th>
                <th>Оценка</th>
                <th>Название фильма</th>
                <th>Год выхода</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>1</td>
                <td>9.1</td>
                <td>Зелёная миля</td>
                <td>1999</td>
            </tr>
            <tr>
                <td>2</td>
                <td>9.1</td>
                <td>Побег из Шоушенка</td>
                <td>1994</td>
            </tr>
            <tr>
                <td>3</td>
                <td>8.6</td>
                <td>Властелин колец: Возвращение Короля</td>
                <td>2003</td>
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
