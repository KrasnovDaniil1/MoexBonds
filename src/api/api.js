import { changeBonds } from "./commands";

const moexBaseUrl = "https://iss.moex.com/iss";
const moexBondsUrl = `${moexBaseUrl}/engines/stock/markets/bonds/securities.json`;

export const getBonds = async () => {
    const response = await fetch(moexBondsUrl);
    const data = await response.json();
    const columnsSecurities = data.securities.columns;
    const dataSecurities = data.securities.data;
    const securities = data.securities.data;
    const columnsMarketData = data.marketdata.columns;
    const dataMarketData = data.marketdata.data;
    return changeBonds(dataSecurities, columnsSecurities);
};
