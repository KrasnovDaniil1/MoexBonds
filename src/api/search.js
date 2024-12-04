export const searchInput = (data, input) => {
  if (input) {
    console.log(1)
    return data.filter((name) => name.indexOf(input) !== -1)
  }
};
