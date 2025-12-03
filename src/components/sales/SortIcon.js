"use client";

export default function SortIcon({ column, sortBy, sortOrder }) {
  const isActive = sortBy === column;
  const dir = isActive ? sortOrder : "asc";

  return (
    <span
      className={`ml-1 inline-flex flex-col text-xs ${
        isActive ? "text-sky-400" : "text-slate-500"
      }`}
    >
      <span className={dir === "asc" ? "font-bold" : ""}>▲</span>
      <span className={dir === "desc" ? "font-bold" : ""}>▼</span>
    </span>
  );
}
