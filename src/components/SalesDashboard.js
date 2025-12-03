"use client";

import { useMemo, useState } from "react";
import { useSalesQuery } from "../hooks/useSalesQuery";
import FiltersBar from "./sales/FiltersBar";
import TimeSeriesChart from "./sales/TimeSeriesChart";
import SalesTable from "./sales/SalesTable";
import PaginationControls from "./sales/PaginationControls";

const DEFAULT_SORT_BY = "date";
const DEFAULT_SORT_ORDER = "asc";

function formatDateInput(date) {
  return date.toISOString().slice(0, 10);
}

export default function SalesDashboard({ initialToken }) {
  const today = useMemo(() => new Date(), []);
  const weekAgo = useMemo(
    () => new Date(today.getTime() - 6 * 24 * 60 * 60 * 1000),
    [today]
  );

  const [token] = useState(initialToken);
  const [startDate, setStartDate] = useState(formatDateInput(weekAgo));
  const [endDate, setEndDate] = useState(formatDateInput(today));
  const [priceMin, setPriceMin] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [sortBy, setSortBy] = useState(DEFAULT_SORT_BY);
  const [sortOrder, setSortOrder] = useState(DEFAULT_SORT_ORDER);
  const [cursor, setCursor] = useState({ after: "", before: "" });

  const { data, isLoading, isError, error, isFetching } = useSalesQuery({
    token,
    startDate,
    endDate,
    priceMin: priceMin || "",
    email: email || "",
    phone: phone || "",
    sortBy,
    sortOrder,
    after: cursor.after,
    before: cursor.before,
  });

  const pagination = data?.pagination;
  const sales = data?.results?.Sales ?? [];
  const totalSales = data?.results?.TotalSales ?? [];

  function resetCursor() {
    setCursor({ after: "", before: "" });
  }

  function handleDateChange(type, value) {
    if (!value) return;
    if (type === "start") {
      setStartDate(value);
    } else {
      setEndDate(value);
    }
    resetCursor();
  }

  function handleFilterChange(field, value) {
    if (field === "priceMin") setPriceMin(value);
    if (field === "email") setEmail(value);
    if (field === "phone") setPhone(value);
    resetCursor();
  }

  function handleToggleSort(column) {
    if (sortBy !== column) {
      setSortBy(column);
      setSortOrder("asc");
    } else {
      setSortOrder((prev) => (prev === "asc" ? "desc" : "asc"));
    }
    resetCursor();
  }

  function goNextPage() {
    if (!pagination?.after) return;
    setCursor({ after: pagination.after, before: "" });
  }

  function goPrevPage() {
    if (!pagination?.before) return;
    setCursor({ after: "", before: pagination.before });
  }

  return (
    <main className="container py-8 space-y-6">
      <header className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
        <div>
          <h1 className="text-2xl md:text-3xl font-semibold tracking-tight">
            Sales Dashboard
          </h1>
          <p className="text-sm text-slate-400 mt-1">
            Explore sales by date range, filters, and sort options. Data is
            fetched live from the Sales Analytics API.
          </p>
        </div>
      </header>

      <FiltersBar
        startDate={startDate}
        endDate={endDate}
        priceMin={priceMin}
        email={email}
        phone={phone}
        isFetching={isFetching && !isLoading}
        onChangeDate={handleDateChange}
        onChangeFilter={handleFilterChange}
      />

      <TimeSeriesChart totalSales={totalSales} isLoading={isLoading} />

      <section className="card p-4 md:p-5 space-y-3">
        <SalesTable
          sales={sales}
          sortBy={sortBy}
          sortOrder={sortOrder}
          isLoading={isLoading}
          isError={isError}
          error={error}
          onToggleSort={handleToggleSort}
        />
        <PaginationControls
          pagination={pagination}
          isFetching={isFetching}
          pageSize={50}
          onPrev={goPrevPage}
          onNext={goNextPage}
        />
      </section>
    </main>
  );
}
