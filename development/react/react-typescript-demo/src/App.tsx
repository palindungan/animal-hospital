import './App.css';
import { RandomNumber } from './components/restriction/RandomNumber';
import { Toast } from './components/templateliterals/Toast';

function App() {
  return (
    <div className="App">
      {/* <RandomNumber value={10} isPositive /> */}
      <Toast position="left-center"></Toast>
    </div>
  );
}

export default App;
