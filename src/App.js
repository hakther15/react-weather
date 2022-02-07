
import './App.css';
import Weather from "./Weather.js";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        
        <div>
          <Weather city="Cleveland" />
        </div>
        
      </header>
      <span className="github">
        <a href="https://github.com/hakther15/weather-app-react" target="blank">
          Open-source code
        </a>{" "}
        by Sina A </span>
    </div>
  );
}

export default App;
