
import './App.css';
import Weather from "./Weather.js";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        
        <p>
          <Weather defaultCity="Cleveland" />
        </p>
        
      </header>
    </div>
  );
}

export default App;
