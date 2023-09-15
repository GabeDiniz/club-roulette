import "./App.css";

// Components
import Navbar from "./components/Navbar";
import SpinningWheel from "./components/SpinningWheel";

function App() {
  const clubOptions = [
    "Driver",
    "5 wood",
    "3 wood",
    "3 hybrid",
    "9 iron",
    "8 iron",
    "7 iron",
    "6 iron",
    "5 iron",
    "P Wedge",
    "52",
    "60",
    "Putter",
  ];

  return (
    <div className="App">
      <Navbar />
      <SpinningWheel options={clubOptions} />
    </div>
  );
}

export default App;
