import { fetchAuthorizeToken } from "../lib/apiClient";
import SalesDashboard from "../components/SalesDashboard";

export default async function HomePage() {
  const token = await fetchAuthorizeToken();

  return <SalesDashboard initialToken={token} />;
}
