import './App.css';
import { Button } from './components/Button';
import { Container } from './components/Container';
import { Input } from './components/Input';

function App() {
  return (
    <div className="App">
      <Button handleClick={(event, id) => {
        console.log("Button Clicked", event, id);
      }} />
      <Input value="" handleChange={(event) => console.log(event)}></Input>

      {/* <Container styles={{ border: '1px solid black', padding: '1rem' }}></Container> */}
    </div>
  );
}

export default App;
