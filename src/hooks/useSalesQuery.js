import { useQuery } from "@tanstack/react-query";
import { fetchSales } from "../lib/apiClient";

export function salesQueryKey(params) {
  return ["sales", params];
}

export function useSalesQuery({
  token,
  startDate,
  endDate,
  priceMin,
  email,
  phone,
  sortBy,
  sortOrder,
  after,
  before,
}) {
  return useQuery({
    queryKey: salesQueryKey({
      startDate,
      endDate,
      priceMin,
      email,
      phone,
      sortBy,
      sortOrder,
      after,
      before,
    }),
    queryFn: () =>
      fetchSales({
        token,
        startDate,
        endDate,
        priceMin,
        email,
        phone,
        sortBy,
        sortOrder,
        after,
        before,
      }),
    enabled: Boolean(token && startDate && endDate),
    keepPreviousData: true,
  });
}
