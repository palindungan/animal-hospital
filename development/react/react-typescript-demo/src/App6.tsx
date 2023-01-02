import './App.css';
import { Private } from './components/auth/Private';
import { Profile } from './components/auth/Profile';
import { Counter } from './components/class/Counter';
import { User } from './components/context/User';
import { UserContextProvider } from './components/context/UserContext';

function App() {
    return (
        <div className="App">
            {/* <UserContextProvider>
        <User></User>
      </UserContextProvider> */}

            {/* <Counter message='The Count Vale is '></Counter> */}

            <Private isLoggedIn={true} component={Profile}></Private>
        </div>
    );
}

export default App;
