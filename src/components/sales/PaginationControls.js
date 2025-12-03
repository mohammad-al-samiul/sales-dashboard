"use client";

export default function PaginationControls({
  pagination,
  isFetching,
  pageSize = 50,
  onPrev,
  onNext,
}) {
  return (
    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mt-2 text-xs">
      <div className="flex items-center gap-2">
        <button
          type="button"
          onClick={onPrev}
          disabled={!pagination?.before || isFetching}
          className="inline-flex items-center gap-1 rounded-md border border-slate-700 bg-slate-900 px-3 py-1.5 text-xs font-medium text-slate-100 disabled:cursor-not-allowed disabled:opacity-40 hover:bg-slate-800"
        >
          ◀ Previous
        </button>
        <button
          type="button"
          onClick={onNext}
          disabled={!pagination?.after || isFetching}
          className="inline-flex items-center gap-1 rounded-md border border-slate-700 bg-slate-900 px-3 py-1.5 text-xs font-medium text-slate-100 disabled:cursor-not-allowed disabled:opacity-40 hover:bg-slate-800"
        >
          Next ▶
        </button>
      </div>
      <div className="text-slate-400">
        <span>
          Page size: <span className="font-semibold">{pageSize}</span> (max from
          API)
        </span>
      </div>
    </div>
  );
}
