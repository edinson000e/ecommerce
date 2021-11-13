import React from "react";
import Header from "../Header";

export default function BasicLayout(props) {
  const { children } = props;
  return (
    <div className="home">
      <Header />
      <div className="container mx-auto px-4">{children}</div>
    </div>
  );
}
