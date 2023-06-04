import { Header } from "./components/Header";
import { Footer } from "./components/Footer";

import { Roboto } from "next/font/google";
import "./globals.css";
import CSS from 'csstype';
import React, { ReactElement } from "react";

const roboto400 = Roboto({
  subsets: ["latin"],
  display: "swap",
  weight: "400",
});

const bodyStyle: CSS.Properties = {
  paddingTop: '80px',
};
export default function RootLayout({ children }: { children: ReactElement }) {
  return (
    <html lang="en">
      <body className={roboto400.className} style={bodyStyle}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
