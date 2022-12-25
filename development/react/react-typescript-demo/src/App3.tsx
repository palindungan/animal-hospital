import './App.css';
import { Greet } from './components/Greet';
import { Heading } from './components/Heading';
import { Oscar } from './components/Oscar';
import { Status } from './components/Status';

function App() {
  return (
    <div className="App">
      <Status status="loading"></Status>
      <Heading>Placeholder Text</Heading>
      <Oscar>
        <Heading>Oscar</Heading>
      </Oscar>
      <Greet name='Rizkika' isLoggedIn={true}></Greet>
    </div>
  );
}

export default App;
