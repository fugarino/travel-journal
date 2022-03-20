import React from "react";
import Card from "./Card";
import data from "../Data";

export default function Content() {
  const cards = data.map((card) => {
    return <Card card={card} />;
  });
  return <section className="content">{cards}</section>;
}
