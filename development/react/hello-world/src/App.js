import logo from "./logo.svg";
import "./App.css";
import Greet from "./components/Greet";
// import {Greet} from './components/Greet';
import Welcome from "./components/Welcome";
import Hello from "./components/Hello";

function App() {
  return (
    <div className="App">
      <Greet name="Rizkika" heroName="Batman">
        <p>This is children props</p>
      </Greet>
      <Greet name="Zakka" heroName="Superman">
        <button>Action</button>
      </Greet>
      <Greet name="Palindungan" heroName="Wonder Woman" />

      <Welcome name="Rizkika" heroName="Batman" />
      <Welcome name="Zakka" heroName="Superman" />
      <Welcome name="Palindungan" heroName="Wonder Woman" />

      {/* <Hello /> */}
    </div>
  );
}

export default App;
