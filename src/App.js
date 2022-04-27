import './App.css';
import PersonCard from "./components/PersonCard"

function App() {
  return (
    <div className="App">
      <PersonCard firstName="Jane" lastName="Doe" age="27" hairColor="Purple" />
      <PersonCard firstName="John" lastName="Smith" age="20" hairColor="Blond" />
      <PersonCard firstName="Thor" lastName="Odinson" age="15987" hairColor="Red" />
      <PersonCard firstName="Esther" lastName="Purim" age="35" hairColor="Brown" />
    </div>
  );
}

export default App;
