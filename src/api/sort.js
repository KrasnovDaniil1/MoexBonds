export const SortByNum = (data, up = false) => {
    if (up) {
        return data.sort((a, b) => +a.price - +b.price);
    }
    return data.sort((a, b) => +b.price - +a.price);
};

