/* сортировка по возрастанию */
export const SortNum = (data, key, down = true) => {
    if (down) {
        return data.sort((a, b) => +b[key] - +a[key]);
    }
    return data.sort((a, b) => +a[key] - +b[key]);
};

/* сортировка по убыванию */

export const sortList = {
    title: "Сортировать по:",
    default: "yearProfit",
    options: {
        yearProfit: "Годовой доходности", // default
        expireYears: "Дате погашения",
        COUPONPERIOD: "Периоду купонов",
        COUPONVALUE: "Величине купона",
        couponCount: "Количеству купонов",
    },
};

export const sortByUpDown = {
    title: "Сортировать по возрастанию / убыванию",
    default: true,
};
