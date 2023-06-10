import React, { ReactElement } from "react";
import CSS from "csstype";
import "./globals.css";

import { Roboto } from "next/font/google";

import { Header } from "./components/Header";
import { Footer } from "./components/Footer";

const roboto400 = Roboto({
  subsets: ["latin"],
  display: "swap",
  weight: "400",
});

const bodyStyle: CSS.Properties = {
  paddingTop: "144px",
};

export default function RootLayout({ children }: { children: ReactElement }) {
  return (
    <html lang="en" className='w-full'>
      <body style={bodyStyle}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
