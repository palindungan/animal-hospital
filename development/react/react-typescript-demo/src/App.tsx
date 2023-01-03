import './App.css';
import { CustomButton } from './components/html/Button';
import { Text } from './components/polymorphic/Text';
import { RandomNumber } from './components/restriction/RandomNumber';
import { Toast } from './components/templateliterals/Toast';

function App() {
  return (
    <div className="App">
      {/* <RandomNumber value={10} isPositive /> */}
      {/* <Toast position="left-center"></Toast> */}

      {/* <CustomButton variant="primary" onClick={() => console.log("clicked")}>
        Primary Button
      </CustomButton> */}

      <Text as="h1" size="lg">Heading</Text>
      <Text as="p" size="md">Parahraph</Text>
      <Text as="label" htmlFor="someId" size="sm" color="secondary">Label</Text>
    </div>
  );
}

export default App;
