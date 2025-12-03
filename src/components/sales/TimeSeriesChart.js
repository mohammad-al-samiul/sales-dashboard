"use client";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

export default function TimeSeriesChart({ totalSales, isLoading }) {
  return (
    <section className="card p-4 md:p-5">
      <div className="flex items-center justify-between mb-3">
        <h2 className="text-sm font-semibold tracking-tight text-slate-100">
          Total Sales Over Time
        </h2>
        <span className="text-xs text-slate-500">
          {totalSales.length} day(s)
        </span>
      </div>
      <div className="h-64 w-full">
        {isLoading ? (
          <div className="flex h-full items-center justify-center text-sm text-slate-400">
            Loading chart…
          </div>
        ) : totalSales.length === 0 ? (
          <div className="flex h-full items-center justify-center text-sm text-slate-400">
            No data for the selected range.
          </div>
        ) : (
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={totalSales}>
              <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" />
              <XAxis
                dataKey="day"
                stroke="#64748b"
                tick={{ fontSize: 11 }}
              />
              <YAxis
                stroke="#64748b"
                tick={{ fontSize: 11 }}
                tickFormatter={(v) => v.toLocaleString()}
              />
              <Tooltip
                contentStyle={{
                  backgroundColor: "#020617",
                  border: "1px solid #1e293b",
                  borderRadius: "0.5rem",
                  fontSize: "0.75rem",
                }}
                formatter={(value) => [value.toLocaleString(), "Total Sales"]}
                labelFormatter={(label) => `Day: ${label}`}
              />
              <Line
                type="monotone"
                dataKey="totalSale"
                stroke="#38bdf8"
                strokeWidth={2}
                dot={false}
                activeDot={{ r: 4 }}
              />
            </LineChart>
          </ResponsiveContainer>
        )}
      </div>
    </section>
  );
}


