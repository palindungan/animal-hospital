import React, { useReducer } from "react";

const reducer = (state, action) => {
  switch (action.type) {
    case "increament":
      return { ...state, firstCounter: state.firstCounter + action.value };
    case "decreament":
      return { ...state, firstCounter: state.firstCounter - action.value };
    case "increament2":
      return { ...state, secondCounter: state.secondCounter + action.value };
    case "decreament2":
      return { ...state, secondCounter: state.secondCounter - action.value };
    case "reset":
      return initialState;
    default:
      return state;
  }
};
const initialState = {
  firstCounter: 0,
  secondCounter: 10,
};

function CounterTwo() {
  const [count, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <div>COUNT firstCounter : {count.firstCounter}</div>
      <div>COUNT secondCounter : {count.secondCounter}</div>
      <button onClick={() => dispatch({ type: "increament", value: 1 })}>
        Increament
      </button>
      <button onClick={() => dispatch({ type: "decreament", value: 1 })}>
        Decreament
      </button>
      <button onClick={() => dispatch({ type: "increament", value: 5 })}>
        Increament 5
      </button>
      <button onClick={() => dispatch({ type: "decreament", value: 5 })}>
        Decreament 5
      </button>
      <button onClick={() => dispatch({ type: "increament2", value: 1 })}>
        Increament secondCounter
      </button>
      <button onClick={() => dispatch({ type: "decreament2", value: 1 })}>
        Decreament secondCounter
      </button>
      <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
    </div>
  );
}

export default CounterTwo;
