import './App.css';
import { Greet } from './components/Greet';
import { Person } from './components/Person';
import { PersonList } from './components/PersonList';

function App() {
  const personName = {
    first:"rizkika",
    last:"zakka"
  };

  const nameList = [
    {
      first:"1 1",
      last:"1 2"
    },
    {
      first:"2 1",
      last:"2 2"
    },
    {
      first:"3 1",
      last:"3 2"
    },
  ];

  return (
    <div className="App">
      <Greet name="Rizkika" messageCount={20} isLoggedIn={false}></Greet>
      <Person name={personName}></Person>
      <PersonList names={nameList}></PersonList>
    </div>
  );
}

export default App;
