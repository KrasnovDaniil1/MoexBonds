export const searchInput = (data, input) => {
    console.log(1);
    return data.filter(
      (name) =>
        name.ISIN.indexOf(input) !== -1 || name.SHORTNAME.indexOf(input) !== -1
    );
};
