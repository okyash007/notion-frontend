import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { DocContextProvider } from "@/core/context/docContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Wong",
  description: "Share Cool Text For Free",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className} suppressHydrationWarning>
        <DocContextProvider>
          {children}
        </DocContextProvider>
      </body>
    </html>
  );
}
