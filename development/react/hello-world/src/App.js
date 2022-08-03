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
import Stylesheet from "./components/Stylesheet";
import Inline from "./components/Inline";
import "./AppStyles.css";
import styles from "./AppStyles.module.css";
import Form from "./components/Form";
import LiveCycleA from "./components/LiveCycleA";
import FragmentDemo from "./components/FragmentDemo";
import Table from "./components/Table";
import PureComp from "./components/PureComp";
import ParentComp from "./components/ParentComp";
import RefsDemo from "./components/RefsDemo";
import FocusInput from "./components/FocusInput";
import FRParentInput from "./components/FRParentInput";
import PortalDemo from "./components2/PortalDemo";
import Hero from "./components2/Hero";
import ErrorBoundary from "./components2/ErrorBoundary";
import ClickCounter from "./components2/ClickCounter";
import HoverCounter from "./components2/HoverCounter";

function App() {
  return (
    <div className="App">
      {/* tutorial 1-30 */}
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

      {/* <NameList></NameList> */}

      {/* <Stylesheet primary={true}></Stylesheet> */}
      {/* <Inline></Inline> */}

      {/* <h1 className="error">Error</h1>
      <h1 className={styles.success}>Error</h1> */}

      {/* <Form></Form> */}

      {/* <LiveCycleA></LiveCycleA> */}

      {/* <FragmentDemo></FragmentDemo> */}
      {/* <Table></Table> */}

      {/* <PureComp></PureComp> */}
      {/* <ParentComp></ParentComp> */}

      {/* <RefsDemo></RefsDemo> */}
      {/* <FocusInput></FocusInput> */}
      {/* <FRParentInput></FRParentInput> */}

      {/* tutorial 31-60 */}
      {/* <PortalDemo></PortalDemo> */}

      {/* <ErrorBoundary>
        <Hero heroName="Batman"></Hero>
      </ErrorBoundary>
      <ErrorBoundary>
        <Hero heroName="Superman"></Hero>
      </ErrorBoundary>
      <ErrorBoundary>
        <Hero heroName="Joker"></Hero>
      </ErrorBoundary> */}

      <ClickCounter name="Rizkika"></ClickCounter>
      <HoverCounter></HoverCounter>
    </div>
  );
}

export default App;
