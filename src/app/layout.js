import "./globals.css";
import QueryProvider from "../components/QueryProvider";

export const metadata = {
  title: "Sales Dashboard",
  description: "Sales analytics dashboard",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-slate-950 text-slate-50 antialiased">
        <QueryProvider>{children}</QueryProvider>
      </body>
    </html>
  );
}
