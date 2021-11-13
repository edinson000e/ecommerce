import React from "react";
import Head from "next/head";
import Header from "../Header";

export default function BasicLayout(props) {
  const { children } = props;
  return (
    <div className="home">
      <Head>
        <title>Eccommerce</title>
        <meta name="description" content="Eccommerce" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <div className="container mx-auto px-2">{children}</div>
    </div>
  );
}
