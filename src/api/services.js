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

export const columnsRus = {
    ISIN: "ISIN",
    SHORTNAME: "SHORTNAME",
    COUPONPERIOD: "COUPONPERIOD",
    COUPONVALUE: "COUPONVALUE",
    ACCRUEDINT: "ACCRUEDINT",
    NEXTCOUPON: "NEXTCOUPON",
    MATDATE: "MATDATE",
    BUYBACKDATE: "BUYBACKDATE",
    SECTYPE: "SECTYPE",
    LOTVALUE: "LOTVALUE",
    INSTRID: "INSTRID",
    FACEUNIT: "FACEUNIT",
    CURRENCYID: "CURRENCYID",
    LISTLEVEL: "LISTLEVEL",
    SECTYPE: "SECTYPE",
    BID: "BID",
  
    expireYears: "expireYears",
    couponCount: "couponCount",
    yearProfit: "yearProfit",
};
