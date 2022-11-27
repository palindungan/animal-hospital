import "./App.css";
import { UseState } from "./components_react_render/UseState/UseState";
import { UseReducer } from "./components_react_render/UseReducer/UseReducer";
import { ObjectUseState } from "./components_react_render/ImmutableState/ObjectUseState";
import { ArrayUseState } from "./components_react_render/ImmutableState/ArrayUseState";
import { Parent } from "./components_react_render/ParentChild/Parent";
import { GrandParent } from "./components_react_render/Optimization/GrandParent";
import { ParentTwo } from "./components_react_render/Optimization/ParentTwo";

function App() {
  return (
    <div className="App">
      {/* <UseState /> */}
      {/* <UseReducer /> */}
      {/* <ObjectUseState /> */}
      {/* <ArrayUseState /> */}
      {/* <Parent /> */}
      {/* <GrandParent /> */}
      <ParentTwo />
    </div>
  );
}

export default App;
