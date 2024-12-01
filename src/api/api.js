import {
    convertArrayToObject,
    mergeObjectToObject,
    removeDuplicate,
} from "./services";
import { changeBonds } from "./commands";

const moexBaseUrl = "https://iss.moex.com/iss";
const moexBondsUrl = `${moexBaseUrl}/engines/stock/markets/bonds/securities.json`;

// export const getBonds = async () => {
//     const response = await fetch(moexBondsUrl);
//     const data = await response.json();
//     const columnsSecurities = data.securities.columns;
//     const dataSecurities = data.securities.data;
//     const columnsMarketData = data.marketdata.columns;
//     const dataMarketData = data.marketdata.data;
//     return changeBonds(
//         dataSecurities,
//         columnsSecurities,
//         columnsMarketData,
//         dataMarketData
//     );
// };

export const getBonds = async () => {
    const response = await fetch(moexBondsUrl);
    const data = await response.json();
    const columnsSecurities = data.securities.columns;
    const dataSecurities = data.securities.data;
    const columnsMarketData = data.marketdata.columns;
    const dataMarketData = data.marketdata.data;
    return mergeBonds(
        dataSecurities,
        columnsSecurities,
        dataMarketData,
        columnsMarketData
    );
};

/* объединение данных dataSecurities и columnsMarketData в один объект */
export const mergeBonds = (
    dataSecurities,
    columnsSecurities,
    dataMarketData,
    columnsMarketData
) => {
    let securities = dataSecurities.map((arr) =>
        convertArrayToObject(arr, columnsSecurities)
    );
    let markets = dataMarketData.map((arr) =>
        convertArrayToObject(arr, columnsMarketData)
    );

    let data = mergeObjectToObject(securities, markets, "SECID");
    data = removeDuplicate(data, "SECID");

    return changeBonds(data);
};
