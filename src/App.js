import logo from "./logo.svg";
import "./App.css";

// Components
import Navbar from "./components/Navbar";
import SpinningWheel from "./components/SpinningWheel";

function App() {
  const clubOptions = [1, 2, 3, 4];

  return (
    <div className="App">
      <Navbar />
      <SpinningWheel options={clubOptions} />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
