import { QueryClient } from "@tanstack/react-query";

// Singleton QueryClient for the browser
let browserQueryClient;

export function getQueryClient() {
  if (typeof window === "undefined") {
    // For SSR/SSG: create a new instance per request
    return new QueryClient();
  }

  if (!browserQueryClient) {
    browserQueryClient = new QueryClient({
      defaultOptions: {
        queries: {
          staleTime: 1000 * 60 * 2, // 2 minutes
          refetchOnWindowFocus: false,
        },
      },
    });
  }

  return browserQueryClient;
}
