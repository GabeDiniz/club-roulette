import "./App.css";

// Components
import Navbar from "./components/Navbar";
import SpinningWheel from "./components/SpinningWheel";

function App() {
  const clubOptions = [
    "Any",
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
    "G Wedge",
    "C Wedge",
    "Putter",
  ];

  return (
    <div className="App">
      <Navbar />
      <SpinningWheel initialOptions={clubOptions} />
    </div>
  );
}

export default App;
