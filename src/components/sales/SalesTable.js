"use client";

import SortIcon from "./SortIcon";

function formatDisplayDate(isoString) {
  const d = new Date(isoString);
  return d.toLocaleString(undefined, {
    year: "numeric",
    month: "short",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
  });
}

export default function SalesTable({
  sales,
  sortBy,
  sortOrder,
  isLoading,
  isError,
  error,
  onToggleSort,
}) {
  return (
    <section className="card p-4 md:p-5 space-y-3">
      <div className="flex items-center justify-between gap-2">
        <div>
          <h2 className="text-sm font-semibold tracking-tight text-slate-100">
            Sales Items
          </h2>
          <p className="text-xs text-slate-500">
            Showing up to 50 items per page using cursor pagination.
          </p>
        </div>
        <div className="flex items-center gap-2 text-xs text-slate-500">
          <span>
            Sorted by{" "}
            <span className="font-medium text-slate-200">{sortBy}</span>
          </span>
          <span className="uppercase">{sortOrder}</span>
        </div>
      </div>

      {isError && (
        <div className="rounded-md border border-red-500/40 bg-red-950/40 px-3 py-2 text-xs text-red-200">
          {error?.message || "Failed to load sales."}
        </div>
      )}

      <div className="overflow-x-auto rounded-md border border-slate-800">
        <table className="min-w-full text-left text-xs md:text-sm">
          <thead className="bg-slate-900/60">
            <tr>
              <th className="px-3 py-2 font-medium text-slate-300">ID</th>
              <th
                className="px-3 py-2 font-medium text-slate-300 cursor-pointer select-none"
                onClick={() => onToggleSort("date")}
              >
                <span className="inline-flex items-center">
                  Date
                  <SortIcon column="date" sortBy={sortBy} sortOrder={sortOrder} />
                </span>
              </th>
              <th
                className="px-3 py-2 font-medium text-slate-300 cursor-pointer select-none"
                onClick={() => onToggleSort("price")}
              >
                <span className="inline-flex items-center">
                  Price
                  <SortIcon column="price" sortBy={sortBy} sortOrder={sortOrder} />
                </span>
              </th>
              <th className="px-3 py-2 font-medium text-slate-300">
                Customer Email
              </th>
              <th className="px-3 py-2 font-medium text-slate-300">Phone</th>
            </tr>
          </thead>
          <tbody>
            {isLoading ? (
              <tr>
                <td
                  colSpan={5}
                  className="px-3 py-6 text-center text-sm text-slate-400"
                >
                  Loading sales…
                </td>
              </tr>
            ) : sales.length === 0 ? (
              <tr>
                <td
                  colSpan={5}
                  className="px-3 py-6 text-center text-sm text-slate-400"
                >
                  No sales found for the selected filters.
                </td>
              </tr>
            ) : (
              sales.map((sale) => (
                <tr
                  key={sale._id}
                  className="border-t border-slate-800/80 hover:bg-slate-900/50"
                >
                  <td className="px-3 py-2 whitespace-nowrap text-[11px] md:text-xs text-slate-400">
                    {sale._id}
                  </td>
                  <td className="px-3 py-2 whitespace-nowrap">
                    {formatDisplayDate(sale.date)}
                  </td>
                  <td className="px-3 py-2 whitespace-nowrap">
                    ${sale.price.toLocaleString()}
                  </td>
                  <td className="px-3 py-2 whitespace-nowrap">
                    {sale.customerEmail}
                  </td>
                  <td className="px-3 py-2 whitespace-nowrap">
                    {sale.customerPhone}
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </section>
  );
}


