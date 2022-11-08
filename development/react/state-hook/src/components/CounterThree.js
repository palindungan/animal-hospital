import React, { useReducer } from "react";

const reducer = (state, action) => {
  switch (action) {
    case "increament":
      return state + 1;
    case "decreament":
      return state - 1;
    case "reset":
      return initialState;
    default:
      return state;
  }
};
const initialState = 0;

function CounterThree() {
  const [count, dispatch] = useReducer(reducer, initialState);
  const [countTwo, dispatchTwo] = useReducer(reducer, initialState);

  return (
    <div>
      <div>COUNT : {count}</div>
      <button onClick={() => dispatch("increament")}>Increament</button>
      <button onClick={() => dispatch("decreament")}>Decreament</button>
      <button onClick={() => dispatch("reset")}>Reset</button>

      <div>
        <div>COUNT 2 : {countTwo}</div>
        <button onClick={() => dispatchTwo("increament")}>Increament 2</button>
        <button onClick={() => dispatchTwo("decreament")}>Decreament 2</button>
        <button onClick={() => dispatchTwo("reset")}>Reset 2</button>
      </div>
    </div>
  );
}

export default CounterThree;
