import { changeBonds } from "./commands";

const moexBaseUrl = "https://iss.moex.com/iss";
const moexBondsUrl = `${moexBaseUrl}/engines/stock/markets/bonds/securities.json`;

export const getBonds = async () => {
    const response = await fetch(moexBondsUrl);
    const data = await response.json();
    const columns = data.securities.columns;
    const securities = data.securities.data;
    return changeBonds(securities, columns);
};


