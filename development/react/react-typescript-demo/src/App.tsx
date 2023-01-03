import './App.css';
import { CustomButton } from './components/html/Button';
import { RandomNumber } from './components/restriction/RandomNumber';
import { Toast } from './components/templateliterals/Toast';

function App() {
  return (
    <div className="App">
      {/* <RandomNumber value={10} isPositive /> */}
      {/* <Toast position="left-center"></Toast> */}

      <CustomButton variant="primary" onClick={() => console.log("clicked")}>
        Primary Button
      </CustomButton>
    </div>
  );
}

export default App;
