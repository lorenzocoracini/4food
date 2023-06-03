import { Header } from "./components/Header";
import { Footer } from "./components/Footer";

import { Inter } from "next/font/google";
import "./globals.css";
import React, { ReactElement } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }: { children: ReactElement }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
