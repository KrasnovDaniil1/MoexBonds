export const convertArrayToObject = (arr, columns) => {
    let obj = {};
    columns.forEach((col, index) => {
        obj[col] = arr[index];
    });
    return obj;
};

const columnsRus = {
    id: "Код",
    name: "",
    startData: "Открытие",
    endData: "Закрытие",
    price:  "Цена",
    coupon: "Купон",
    couponPeriod: "Выплат в год",
    couponDate: "Ближайший купон",
    value: "Ближайший купон",
    board: "Ближайший купон",
};
