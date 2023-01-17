import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { modifyPopulation } from "./store";

export default function App() {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  console.log(state[0].population);

  console.log(state[0].population);
  return (
    <div className="App">
      <h1>{state[0].population}</h1>
      <button onClick={() => dispatch(modifyPopulation(1, "221"))}>
        click
      </button>
    </div>
  );
}
