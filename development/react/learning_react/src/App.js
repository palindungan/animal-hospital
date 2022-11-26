import "./App.css";
import { UseState } from "./components_react_render/UseState/UseState";
import { UseReducer } from "./components_react_render/UseReducer/UseReducer";
import { ObjectUseState } from "./components_react_render/ImmutableState/ObjectUseState";
import { ArrayUseState } from "./components_react_render/ImmutableState/ArrayUseState";

function App() {
  return (
    <div className="App">
      {/* <UseState /> */}
      {/* <UseReducer /> */}
      {/* <ObjectUseState /> */}
      <ArrayUseState />
    </div>
  );
}

export default App;
