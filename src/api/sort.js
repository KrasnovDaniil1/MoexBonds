export const SortByPrice = (data) => {
    return data.sort((a, b) => (+a.price) - (+b.price));
}