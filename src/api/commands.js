import { convertArrayToObject } from "./services";

const calculateCouponCount = (couponDateStr, expireDateStr, period) => {
    let couponDate = new Date(couponDateStr);
    let expireDate = new Date(expireDateStr);
    return Math.round(
        (expireDate - couponDate) / (1000 * 3600 * 24) / period + 1
    );
};

const calculateExpireYears = (expireDate) => {
    let end = new Date(expireDate);
    let now = new Date();
    let years = (end - now) / (1000 * 3600 * 24 * 365);
    return years;
};

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

export const changeBonds = (data, columns) => {
    return data.map((arr) => {
        let obj = convertArrayToObject(arr, columns);

        let expireDate =
            obj.MATDATE != "0000-00-00" ? obj.MATDATE : obj.BUYBACKDATE;

        let expireYears = calculateExpireYears(expireDate);

        let couponCount = calculateCouponCount(
            obj.NEXTCOUPON,
            obj.MATDATE != "0000-00-00" ? obj.MATDATE : obj.BUYBACKDATE,
            obj.COUPONPERIOD
        );
        let buyBackPrice =
            obj.MATDATE != "0000-00-00" ? obj.LOTVALUE : obj.BUYBACKPRICE;

        let price = (obj.PREVPRICE / 100) * obj.FACEVALUE;

        let yearProfit = calculateYearProfit(
            price,
            obj.COUPONVALUE,
            obj.ACCRUEDINT,
            expireYears,
            couponCount,
            buyBackPrice
        );

        // let yearProfit = calculateYearProfit()
        const returnValue = {
            id: obj.ISIN,
            name: obj.SHORTNAME,
            couponPeriod: obj.COUPONPERIOD,
            coupon: obj.COUPONVALUE,
            nkd: obj.ACCRUEDINT,
            couponDate: obj.NEXTCOUPON,
            expireDate,
            couponCount,
            buyBackPrice,
            expireYears,
            yearProfit,
            price,
        };
        return returnValue;
    });
};
// value: buyBackPrice,
// startData: value,
// endData: value,
