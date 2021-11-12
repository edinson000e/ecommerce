import type { AppProps } from "next/app";
import React from "react";
import { CartContextProvider } from "../context";
import "../styles/index.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <CartContextProvider>
      <Component {...pageProps} />
    </CartContextProvider>
  );
}

export default MyApp;
