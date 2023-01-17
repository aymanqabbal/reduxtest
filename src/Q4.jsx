import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export default function Q4() {
  const state = useSelector((state) => state);
  let years = state.map((c) => (
    <Link to={`/cards/${c.code}`}> {c.indepYear}</Link>
  ));
  console.log(years);
  return (
    <div>
      <h1>hello : years of independance</h1>
      {years}
    </div>
  );
}
