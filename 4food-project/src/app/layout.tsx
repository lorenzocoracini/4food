import React, { ReactElement } from "react";
import CSS from "csstype";
import "./globals.css";

import { Roboto } from "next/font/google";

import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { CartContextProvider } from "context/CartContext";

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
    <html lang="en">
      <body style={bodyStyle}>
        <Header />
        <CartContextProvider>
          {children}
        </CartContextProvider>
        {/* <Footer /> */}
      </body>
    </html>
  );
}
