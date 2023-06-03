import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Inter } from "next/font/google";
import "./globals.css";
import CSS from 'csstype';
import React, { ReactElement } from "react";

const inter = Inter({ subsets: ["latin"] });

const bodyStyle: CSS.Properties = {
  paddingTop: '80px',
};
export default function RootLayout({ children }: { children: ReactElement }) {
  return (
    <html lang="en">
      <body className={inter.className} style={bodyStyle}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
