import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router";

export default function Card() {
  const state = useSelector((state) => state);
  const { code } = useParams();
  const country = state[state.findIndex((c) => code == c.code)];
  console.log(code);
  return (
    <div>
      <h1>{code}</h1>
      <h1>{country.name}</h1>
    </div>
  );
}
