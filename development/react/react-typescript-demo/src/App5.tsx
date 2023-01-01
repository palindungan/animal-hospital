import './App.css';
import { Box } from './components/context/Box';
import { ThemeContextProvider } from './components/context/ThemeContext';
import { Counter } from './components/state/Counter';
import { LoggedIn } from './components/state/LoggedIn';
import { User } from './components/state/User';
import { User2 } from './components/state/User2';

function App() {
    return (
        <div className="App">
            {/* <LoggedIn></LoggedIn> */}
            {/* <User></User> */}
            {/* <User2></User2> */}
            {/* <Counter></Counter> */}

            <ThemeContextProvider>
                <Box />
            </ThemeContextProvider>
        </div>
    );
}

export default App;
