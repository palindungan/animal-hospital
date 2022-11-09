import React, { useReducer } from "react";
import "./App.css";
import ClassCounter from "./components/ClassCounter";
import ClassCounterOne from "./components/ClassCounterOne";
import ClassMouse from "./components/ClassMouse";
import ComponentC from "./components/ComponentC";
import CounterOne from "./components/CounterOne";
import CounterThree from "./components/CounterThree";
import CounterTwo from "./components/CounterTwo";
import DataFetching from "./components/DataFetching";
import HookCounter from "./components/HookCounter";
import HookCounterFour from "./components/HookCounterFour";
import HookCounterOne from "./components/HookCounterOne";
import HookCounterThree from "./components/HookCounterThree";
import HookCounterTwo from "./components/HookCounterTwo";
import HookMouse from "./components/HookMouse";
import IntervalClassCounter from "./components/IntervalClassCounter";
import IntervalHookCounter from "./components/IntervalHookCounter";
import MouseContainer from "./components/MouseContainer";
import NewComponentA from "./components/NewComponentA";
import NewComponentB from "./components/NewComponentB";
import NewComponentC from "./components/NewComponentC";

export const UserContent = React.createContext();
export const ChannelContext = React.createContext();

export const CountContext = React.createContext();
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

function App() {
  const [count, dispatch] = useReducer(reducer, initialState);

  return (
    <CountContext.Provider
      value={{ countState: count, countDispatch: dispatch }}
    >
      <div className="App">
        {/* <ClassCounter /> */}
        {/* <HookCounter /> */}
        {/* <HookCounterTwo /> */}
        {/* <HookCounterThree /> */}
        {/* <HookCounterFour /> */}
        {/* <ClassCounterOne /> */}
        {/* <HookCounterOne /> */}
        {/* <ClassMouse /> */}
        {/* <HookMouse /> */}
        {/* <MouseContainer /> */}
        {/* <IntervalClassCounter /> */}
        {/* <IntervalHookCounter /> */}
        {/* <DataFetching /> */}
        {/* <UserContent.Provider value={"Rizkika"}>
        <ChannelContext.Provider value={"HEHE"}>
          <ComponentC />
        </ChannelContext.Provider>
      </UserContent.Provider> */}
        {/* <CounterOne></CounterOne> */}
        {/* <CounterTwo></CounterTwo> */}
        {/* <CounterThree></CounterThree> */}
        Count : {count}
        <NewComponentA></NewComponentA>
        <NewComponentB></NewComponentB>
        <NewComponentC></NewComponentC>
      </div>
    </CountContext.Provider>
  );
}

export default App;
