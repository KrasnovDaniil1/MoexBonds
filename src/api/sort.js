/* сортировка по возрастанию */
export const SortNumByUp = (data, key) => {
    return data.sort((a, b) => +a[key] - +b[key]);
};

/* сортировка по убыванию */
export const SortNumByDown = (data, key) => {
    return data.sort((a, b) => +b[key] - +a[key]);
};
