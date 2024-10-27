import type { Metadata } from "next";

import AppNavbar from "@/components/app-navbar";
import Providers from "@/components/providers";

import "./globals.css";

export const metadata: Metadata = {
  title: "Next.js Starter | by uguremirmustafa",
  description: "Next.js starter by uguremirmustafa",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <link
        rel="icon"
        href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>📦</text></svg>"
      />
      <body className="h-screen w-screen">
        <Providers>
          <AppNavbar />
          <main className="flex-grow overflow-auto bg-orange-100 bg-gradient-to-br from-gray-300 to-gray-200 dark:from-gray-900 dark:to-gray-700">
            <div className="mx-auto max-w-5xl px-4 py-4">{children}</div>
          </main>
        </Providers>
      </body>
    </html>
  );
}
