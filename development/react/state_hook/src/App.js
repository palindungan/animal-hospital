import logo from "./logo.svg";
import "./App.css";
import DataFechingOne from "./components/DataFechingOne";
import DataFechingTwo from "./components/DataFechingTwo";
import ParentComponent from "./components/ParentComponent";

function App() {
  return (
    <div className="App">
      {/* <DataFechingOne /> */}
      <ParentComponent />
    </div>
  );
}

export default App;
