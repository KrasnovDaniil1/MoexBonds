import { convertArrayToObject } from "./services";

export const changeBonds = (data, columns) => {
    return data.map((arr) => {
        let obj = convertArrayToObject(arr, columns);
        const returnValue = {
            id: obj.ISIN,
            name: value.SHORTNAME,
            // value: buyBackPrice,
            // startData: value,
            // endData: value,
            price: value.PREVPRICE,
            coupon: value.COUPONVALUE,
            couponPeriod: value.COUPONPERIOD,
            couponDate: value.NEXTCOUPON,
            value: buyBackPrice,
            board: value.BOARDID,
        };
        return returnValue;
    });
};
