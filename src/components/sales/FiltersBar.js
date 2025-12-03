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
    <section
      className="card p-4 md:p-5 space-y-4"
      aria-live="polite"
      aria-busy={isFetching ? "true" : "false"}
    >
      {/* Grid: mobile 1 col, sm 2, md 3, lg 5 (uniform on large screens) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {/* Start Date */}
        <div className="flex flex-col">
          <label
            htmlFor="startDate"
            className="text-xs font-medium text-slate-300 mb-1"
          >
            Start Date
          </label>
          <input
            id="startDate"
            type="date"
            className="w-full h-10 rounded-md bg-slate-900 border border-slate-700 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-sky-500"
            value={startDate}
            onChange={(e) => onChangeDate("start", e.target.value)}
            aria-label="Start date"
          />
        </div>

        {/* End Date */}
        <div className="flex flex-col">
          <label
            htmlFor="endDate"
            className="text-xs font-medium text-slate-300 mb-1"
          >
            End Date
          </label>
          <input
            id="endDate"
            type="date"
            className="w-full h-10 rounded-md bg-slate-900 border border-slate-700 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-sky-500"
            value={endDate}
            onChange={(e) => onChangeDate("end", e.target.value)}
            aria-label="End date"
          />
        </div>

        {/* Min Price */}
        <div className="flex flex-col">
          <label
            htmlFor="priceMin"
            className="text-xs font-medium text-slate-300 mb-1"
          >
            Min Price
          </label>
          <input
            id="priceMin"
            type="number"
            min="0"
            inputMode="numeric"
            placeholder="0"
            className="w-full h-10 rounded-md bg-slate-900 border border-slate-700 px-3 py-2 text-sm placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-sky-500"
            value={priceMin}
            onChange={(e) => onChangeFilter("priceMin", e.target.value)}
            aria-label="Minimum price"
          />
        </div>

        {/* Customer Email */}
        <div className="flex flex-col">
          <label
            htmlFor="email"
            className="text-xs font-medium text-slate-300 mb-1"
          >
            Customer Email
          </label>
          <input
            id="email"
            type="email"
            placeholder="email@example.com"
            className="w-full h-10 rounded-md bg-slate-900 border border-slate-700 px-3 py-2 text-sm placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-sky-500"
            value={email}
            onChange={(e) => onChangeFilter("email", e.target.value)}
            aria-label="Customer email"
          />
        </div>

        {/* Phone Number */}
        <div className="flex flex-col">
          <label
            htmlFor="phone"
            className="text-xs font-medium text-slate-300 mb-1"
          >
            Phone Number
          </label>
          <input
            id="phone"
            type="tel"
            placeholder="+1..."
            className="w-full h-10 rounded-md bg-slate-900 border border-slate-700 px-3 py-2 text-sm placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-sky-500"
            value={phone}
            onChange={(e) => onChangeFilter("phone", e.target.value)}
            aria-label="Phone number"
          />
        </div>
      </div>

      {/* fetching indicator */}
      <div className="flex items-center justify-between">
        <p className="text-xs text-slate-400">Use filters to refine results.</p>
        {isFetching ? (
          <p className="text-xs text-sky-400" aria-live="polite">
            Refreshing data…
          </p>
        ) : (
          <div />
        )}
      </div>
    </section>
  );
}
