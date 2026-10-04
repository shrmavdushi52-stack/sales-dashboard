"use client";
import { useState } from "react";
import { salesByYear, years } from "@/data/sales";
import ButtonGroup from "../molecules/buttongroup";
import ThresholdInput from "../molecules/thresholdinput";
import StatCard from "../atoms/statcard";
import SalesChart, { ChartType } from "./saleschart";

export default function SalesDashboard() {
  const [year, setYear] = useState(2024);
  const [type, setType] = useState<ChartType>("bar");
  const [threshold, setThreshold] = useState(0);

  const data = salesByYear[year].filter((d) => d.sales >= threshold);
  const total = data.reduce((s, d) => s + d.sales, 0);
  const best = data.length ? data.reduce((a, b) => (b.sales > a.sales ? b : a)) : null;

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-end gap-6">
        <ButtonGroup label="Year" options={years} value={year} onChange={setYear} />
        <ButtonGroup label="Chart type" options={["bar","line","pie"] as ChartType[]} value={type} onChange={setType} />
        <ThresholdInput value={threshold} onChange={setThreshold} />
      </div>
      <div className="grid gap-4 sm:grid-cols-3">
        <StatCard label={`Total sales ${year}`} value={`$${total.toLocaleString()}`} />
        <StatCard label="Months shown" value={String(data.length)} />
        <StatCard label="Best month" value={best ? `${best.month} ($${best.sales.toLocaleString()})` : "-"} />
      </div>
      <SalesChart data={data} type={type} />
    </div>
  );
}