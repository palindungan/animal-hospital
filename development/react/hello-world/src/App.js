import logo from "./logo.svg";
import "./App.css";
import Greet from "./components/Greet";
// import {Greet} from './components/Greet';
import Welcome from "./components/Welcome";
import Hello from "./components/Hello";
import Message from "./components/Message";
import Counter from "./components/Counter";
import FunctionClick from "./components/FunctionClick";
import ClassClick from "./components/ClassClick";
import EventBind from "./components/EventBind";
import ParentComponent from "./components/ParentComponent";
import UserGreeting from "./components/UserGreeting";
import NameList from "./components/NameList";

function App() {
  return (
    <div className="App">
      {/* <Greet name="Rizkika" heroName="Batman">
        <p>This is children props</p>
      </Greet> */}
      {/* <Greet name="Zakka" heroName="Superman">
        <button>Action</button>
      </Greet> */}
      {/* <Greet name="Palindungan" heroName="Wonder Woman" /> */}

      {/* <Welcome name="Rizkika" heroName="Batman" /> */}
      {/* <Welcome name="Zakka" heroName="Superman" /> */}
      {/* <Welcome name="Palindungan" heroName="Wonder Woman" /> */}

      {/* <Hello /> */}

      {/* <Message></Message> */}

      {/* <Counter></Counter> */}

      {/* <FunctionClick></FunctionClick> */}
      {/* <ClassClick></ClassClick> */}

      {/* <EventBind></EventBind> */}

      {/* <ParentComponent></ParentComponent> */}

      {/* <UserGreeting></UserGreeting> */}

      <NameList></NameList>
    </div>
  );
}

export default App;
