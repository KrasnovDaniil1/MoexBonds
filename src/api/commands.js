
/* подсчёт оставшихся купонов */
const calculateCouponCount = (couponDateStr, expireDateStr, period) => {
    let couponDate = new Date(couponDateStr);
    let expireDate = new Date(expireDateStr);
    return Math.round(
        (expireDate - couponDate) / (1000 * 3600 * 24) / period + 1
    );
};

/* подсчёт лет до погашения */
const calculateExpireYears = (expireDate) => {
    let end = new Date(expireDate);
    let now = new Date();
    let years = (end - now) / (1000 * 3600 * 24 * 365);
    return years;
};

/* годовая доходность */
const calculateYearProfit = (
    price,
    coupon,
    nkd,
    expireYears,
    couponCount,
    buyBackPrice
) => {
    let total = couponCount * coupon - nkd + (buyBackPrice - price);
    let res = (total / price / expireYears) * 100;
    return res.toFixed(2);
};

export const changeBonds = (data) => {
    return data.map((obj) => {
        /* дата выплаты по колл или погащению */
        let expireDate =
            obj.MATDATE != "0000-00-00" ? obj.MATDATE : obj.BUYBACKDATE;
        /* осталось лет до оферты или погашения */
        let expireYears = calculateExpireYears(expireDate);
        /* осталось купонов до оферты или погашения */
        let couponCount = calculateCouponCount(
            obj.NEXTCOUPON,
            obj.MATDATE != "0000-00-00" ? obj.MATDATE : obj.BUYBACKDATE,
            obj.COUPONPERIOD
        );
        /* годовая доходность */
        let yearProfit = calculateYearProfit(
            obj.MARKETPRICE,
            obj.COUPONVALUE,
            obj.ACCRUEDINT,
            expireYears,
            couponCount,
            obj.LOTVALUE
        );
        return {
            ISIN: obj.ISIN,
            SHORTNAME: obj.SHORTNAME,
            COUPONPERIOD: obj.COUPONPERIOD,
            COUPONVALUE: obj.COUPONVALUE,
            ACCRUEDINT: obj.ACCRUEDINT,
            NEXTCOUPON: obj.NEXTCOUPON,
            MATDATE: obj.MATDATE,
            BUYBACKDATE: obj.BUYBACKDATE,
            BUYBACKPRICE: obj.BUYBACKPRICE,
            SECTYPE: obj.SECTYPE,
            LOTVALUE: obj.LOTVALUE,
            REMARKS: obj.REMARKS,
            MARKETCODE: obj.MARKETCODE,
            INSTRID: obj.INSTRID,
            SECTORID: obj.SECTORID,
            FACEUNIT: obj.FACEUNIT,
            CURRENCYID: obj.CURRENCYID,
            LISTLEVEL: obj.LISTLEVEL,
            SECTYPE: obj.SECTYPE,
            SETTLEDATE: obj.SETTLEDATE,
            BID: obj.BID,
            OFFER: obj.OFFER,
            LOW: obj.LOW,
            HIGH: obj.HIGH,
            LAST: obj.LAST,
            MARKETPRICETODAY: obj.MARKETPRICETODAY,
            MARKETPRICE: obj.MARKETPRICE,
            MARKETPRICE2: obj.MARKETPRICE2,
            expireYears,
            couponCount,
            yearProfit,
        };
    });
};

// export const changeBonds = (data, columns) => {
//     return data.map((arr) => {
//         let obj = convertArrayToObject(arr, columns);

//         let expireDate =
//             obj.MATDATE != "0000-00-00" ? obj.MATDATE : obj.BUYBACKDATE;

//         let expireYears = calculateExpireYears(expireDate);

//         let couponCount = calculateCouponCount(
//             obj.NEXTCOUPON,
//             obj.MATDATE != "0000-00-00" ? obj.MATDATE : obj.BUYBACKDATE,
//             obj.COUPONPERIOD
//         );
//         let buyBackPrice =
//             obj.MATDATE != "0000-00-00" ? obj.LOTVALUE : obj.BUYBACKPRICE;

//         let price = (obj.PREVPRICE / 100) * obj.FACEVALUE;

//         let yearProfit = calculateYearProfit(
//             price,
//             obj.COUPONVALUE,
//             obj.ACCRUEDINT,
//             expireYears,
//             couponCount,
//             buyBackPrice
//         );

//         // let yearProfit = calculateYearProfit()
//         const returnValue = {
//             id: obj.ISIN,
//             name: obj.SHORTNAME,
//             couponPeriod: obj.COUPONPERIOD,
//             coupon: obj.COUPONVALUE,
//             nkd: obj.ACCRUEDINT,
//             couponDate: obj.NEXTCOUPON,
//             expireDate,
//             couponCount,
//             buyBackPrice,
//             expireYears,
//             yearProfit,
//             price,
//         };
//         return returnValue;
//     });
// };
// value: buyBackPrice,
// startData: value,
// endData: value,
