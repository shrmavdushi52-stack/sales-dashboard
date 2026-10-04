export type SalesPoint = { month: string; sales: number };
const months = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
const make = (v: number[]): SalesPoint[] => v.map((sales, i) => ({ month: months[i], sales }));

export const salesByYear: Record<number, SalesPoint[]> = {
  2022: make([12000,13500,12800,15000,16200,15800,17000,16500,18000,19500,21000,24000]),
  2023: make([14000,15200,14800,16800,18000,17500,19000,18800,20500,22000,23500,27000]),
  2024: make([16500,17800,17200,19500,21000,20400,22500,22000,24000,26000,28000,31000]),
};
export const years = [2022, 2023, 2024];