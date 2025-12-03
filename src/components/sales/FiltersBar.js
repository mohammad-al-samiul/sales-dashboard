"use client";

export default function FiltersBar({
  startDate,
  endDate,
  priceMin,
  email,
  phone,
  isFetching,
  onChangeDate,
  onChangeFilter,
}) {
  return (
    <section className="card p-4 md:p-5 space-y-4">
      <div className="flex flex-col md:flex-row gap-4 md:items-center md:justify-between">
        <div className="flex flex-col sm:flex-row gap-3 sm:items-center">
          <div className="flex flex-col">
            <label className="text-xs font-medium text-slate-300 mb-1">
              Start Date
            </label>
            <input
              type="date"
              className="rounded-md bg-slate-900 border border-slate-700 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-sky-500"
              value={startDate}
              onChange={(e) => onChangeDate("start", e.target.value)}
            />
          </div>
          <div className="flex flex-col">
            <label className="text-xs font-medium text-slate-300 mb-1">
              End Date
            </label>
            <input
              type="date"
              className="rounded-md bg-slate-900 border border-slate-700 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-sky-500"
              value={endDate}
              onChange={(e) => onChangeDate("end", e.target.value)}
            />
          </div>
        </div>

        <div className="flex flex-wrap gap-3">
          <div className="flex flex-col">
            <label className="text-xs font-medium text-slate-300 mb-1">
              Min Price
            </label>
            <input
              type="number"
              min="0"
              className="w-full sm:w-28 rounded-md bg-slate-900 border border-slate-700 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-sky-500"
              value={priceMin}
              onChange={(e) => onChangeFilter("priceMin", e.target.value)}
              placeholder="0"
            />
          </div>
          <div className="flex flex-col">
            <label className="text-xs font-medium text-slate-300 mb-1">
              Customer Email
            </label>
            <input
              type="email"
              className="w-full sm:w-44 rounded-md bg-slate-900 border border-slate-700 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-sky-500"
              value={email}
              onChange={(e) => onChangeFilter("email", e.target.value)}
              placeholder="user@example.com"
            />
          </div>
          <div className="flex flex-col">
            <label className="text-xs font-medium text-slate-300 mb-1">
              Phone Number
            </label>
            <input
              type="tel"
              className="w-full sm:w-40 rounded-md bg-slate-900 border border-slate-700 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-sky-500"
              value={phone}
              onChange={(e) => onChangeFilter("phone", e.target.value)}
              placeholder="+1..."
            />
          </div>
        </div>
      </div>
      {isFetching && <p className="text-xs text-sky-400">Refreshing data…</p>}
    </section>
  );
}
