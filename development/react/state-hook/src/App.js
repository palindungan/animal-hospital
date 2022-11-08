import React from "react";
import "./App.css";
import ClassCounter from "./components/ClassCounter";
import ClassCounterOne from "./components/ClassCounterOne";
import ClassMouse from "./components/ClassMouse";
import ComponentC from "./components/ComponentC";
import CounterOne from "./components/CounterOne";
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

export const UserContent = React.createContext();
export const ChannelContext = React.createContext();

function App() {
  return (
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

      <CounterTwo></CounterTwo>
    </div>
  );
}

export default App;
