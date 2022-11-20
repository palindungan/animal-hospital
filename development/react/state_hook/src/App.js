import logo from "./logo.svg";
import "./App.css";
import DataFechingOne from "./components/DataFechingOne";
import DataFechingTwo from "./components/DataFechingTwo";
import ParentComponent from "./components/ParentComponent";
import Counter from "./components/Counter";
import FocusInput from "./components/FocusInput";
import ClassTimer from "./components/ClassTimer";
import HookTimer from "./components/HookTimer";

function App() {
  return (
    <div className="App">
      {/* <DataFechingOne /> */}
      {/* <ParentComponent /> */}
      {/* <Counter /> */}
      {/* <FocusInput /> */}
      <ClassTimer />
      <HookTimer />
    </div>
  );
}

export default App;
