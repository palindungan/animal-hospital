import './App.css';
import { List } from './components/generic/List';

function App() {
    return (
        <div className="App">
            <List
                items={["Batman", "Superman", "Wonder Woman"]}
                onClick={(item) => console.log(item)}
            />
            <List
                items={[1, 2, 3]}
                onClick={(item) => console.log(item)}
            />
            <List
                items={[
                    {
                        first: "rizkika",
                        last: "zakka",
                    },
                    {
                        first: "22",
                        last: "33",
                    },
                    {
                        first: "44",
                        last: "55",
                    },
                ]}
                onClick={(item) => console.log(item)}
            />
        </div>
    );
}

export default App;
