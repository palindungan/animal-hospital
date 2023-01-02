import './App.css';
import { Counter } from './components/class/Counter';
import { User } from './components/context/User';
import { UserContextProvider } from './components/context/UserContext';

function App() {
  return (
    <div className="App">
      {/* <UserContextProvider>
        <User></User>
      </UserContextProvider> */}

      <Counter message='The Count Vale is '></Counter>
    </div>
  );
}

export default App;
