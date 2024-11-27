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

const columnsRus = {
    ISIN: "ISIN",
    SHORTNAME: "SHORTNAME",
    COUPONPERIOD: "COUPONPERIOD",
    COUPONVALUE: "COUPONVALUE",
    ACCRUEDINT: "ACCRUEDINT",
    NEXTCOUPON: "NEXTCOUPON",
    MATDATE: "MATDATE",
    BUYBACKDATE: "BUYBACKDATE",
    BUYBACKPRICE: "BUYBACKPRICE",
    SECTYPE: "SECTYPE",
    LOTVALUE: "LOTVALUE",
    REMARKS: "REMARKS",
    MARKETCODE: "MARKETCODE",
    INSTRID: "INSTRID",
    SECTORID: "SECTORID",
    FACEUNIT: "FACEUNIT",
    CURRENCYID: "CURRENCYID",
    LISTLEVEL: "LISTLEVEL",
    SECTYPE: "SECTYPE",
    SETTLEDATE: "SETTLEDATE",
    BID: "BID",
    OFFER: "OFFER",
    LOW: "LOW",
    HIGH: "HIGH",
    LAST: "LAST",
    MARKETPRICETODAY: "MARKETPRICETODAY",
    MARKETPRICE: "MARKETPRICE",
    MARKETPRICE2: "MARKETPRICE2",
    expireYears: "expireYears",
    couponCount: "couponCount",
    yearProfit: "yearProfit",
};
