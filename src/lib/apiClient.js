const BASE_URL = "https://autobizz-425913.uc.r.appspot.com";

export async function fetchAuthorizeToken() {
  const res = await fetch(`${BASE_URL}/getAuthorize`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ tokenType: "frontEndTest" }),
    // Force dynamic so token is always fresh on the server
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to get auth token");
  }

  const data = await res.json();
  return data.token;
}

export async function fetchSales({
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
  const params = new URLSearchParams();
  if (startDate) params.set("startDate", startDate);
  if (endDate) params.set("endDate", endDate);
  if (priceMin !== undefined && priceMin !== null)
    params.set("priceMin", String(priceMin));
  if (email) params.set("email", email);
  if (phone) params.set("phone", phone);
  if (sortBy) params.set("sortBy", sortBy);
  if (sortOrder) params.set("sortOrder", sortOrder);
  if (after) params.set("after", after);
  if (before) params.set("before", before);

  const res = await fetch(`${BASE_URL}/sales?${params.toString()}`, {
    headers: {
      "X-AUTOBIZZ-TOKEN": token,
    },
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch sales");
  }

  return res.json();
}
