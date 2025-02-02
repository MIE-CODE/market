import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { StoreProvider } from "./context/productsContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "Gleam",
    template: "%s - Gleam",
  },
  description: "",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <StoreProvider>
        <body className={`${inter.className} font-Dm-mono`}>{children}</body>
      </StoreProvider>
    </html>
  );
}
