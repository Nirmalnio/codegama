import "./globals.css";
import { Inter } from "next/font/google";
import { Providers } from "./Global/provider";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Codegama",
  description: "Ecommerce website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
