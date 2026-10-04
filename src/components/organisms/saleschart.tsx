"use client";
import {
  BarChart, Bar, LineChart, Line, PieChart, Pie, Cell,
  XAxis, YAxis, Tooltip, Legend, CartesianGrid, ResponsiveContainer,
} from "recharts";
import type { SalesPoint } from "@/data/sales";

export type ChartType = "bar" | "line" | "pie";
const COLORS = ["#6366f1","#22c55e","#f59e0b","#ef4444","#06b6d4","#a855f7","#ec4899","#84cc16","#f97316","#14b8a6","#3b82f6","#eab308"];

export default function SalesChart({ data, type }: { data: SalesPoint[]; type: ChartType }) {
  if (data.length === 0) return <p className="py-10 text-center text-gray-500">No months meet this threshold.</p>;
  return (
    <div className="h-80 w-full rounded-lg border bg-white p-4 shadow-sm">
      <ResponsiveContainer width="100%" height="100%">
        {type === "bar" ? (
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" /><XAxis dataKey="month" /><YAxis />
            <Tooltip /><Legend /><Bar dataKey="sales" fill="#6366f1" />
          </BarChart>
        ) : type === "line" ? (
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" /><XAxis dataKey="month" /><YAxis />
            <Tooltip /><Legend /><Line type="monotone" dataKey="sales" stroke="#6366f1" strokeWidth={2} />
          </LineChart>
        ) : (
          <PieChart>
            <Pie data={data} dataKey="sales" nameKey="month" outerRadius={110} label>
              {data.map((_, i) => <Cell key={i} fill={COLORS[i % COLORS.length]} />)}
            </Pie>
            <Tooltip /><Legend />
          </PieChart>
        )}
      </ResponsiveContainer>
    </div>
  );
}