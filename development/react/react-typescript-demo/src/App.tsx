import './App.css';
import { LoggedIn } from './components/state/LoggedIn';
import { User } from './components/state/User';

function App() {
  return (
    <div className="App">
      {/* <LoggedIn></LoggedIn> */}
      <User></User>
    </div>
  );
}

export default App;
