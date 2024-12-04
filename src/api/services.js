export const convertArrayToObject = (arr, columns) => {
    let obj = {};
    columns.forEach((col, index) => (obj[col] = arr[index]));
    return obj;
};

export const mergeObjectToObject = (securities, markets, key) => {
    let data = [];
    securities.forEach((securitie) => {
        markets.forEach((market) => {
            if (securitie[key] == market[key]) {
                data.push({
                    ...securitie,
                    ...market,
                });
            }
        });
    });
    return data;
};

export const removeDuplicate = (data, key) => {
    let k = data[0];
    return data.filter((item) => {
        if (item[key] != k[key]) {
            k = item;
            return item;
        }
    });
};

export const nullPrice = (arr,d = 0) => {
    for (let v of arr) {
        if (v !== null && !isNaN(v) && isFinite(v)) {
            return v;
        }
    }
    return d;
};

export const nullData = (v, d = 0) => {
    if (v !== null && !isNaN(v) && isFinite(v)) {
        return v;
    }
    return d;
};

export const columnsRus = {
    ISIN: "Номер",
    SHORTNAME: "Название",
    LOTVALUE: "Номинал",
    COUPONPERIOD: "Период",

    COUPONVALUE: "Купон",
    ACCRUEDINT: "НКД",
    expireYears: "Осталось лет",
    price: "Цена",
    couponCount: "Купонов",
    // NEXTCOUPON: "Следующий купон",
    BUYBACKDATE: "Дата оферты",
    MATDATE: "Дата выкупа",
    yearProfit: "Доходность",

    // SECTYPE: "SECTYPE",
    // INSTRID: "INSTRID",
    // FACEUNIT: "FACEUNIT",
    // CURRENCYID: "CURRENCYID",
    // LISTLEVEL: "LISTLEVEL",
};
